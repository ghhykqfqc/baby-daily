import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../supabaseClient';
import bcrypt from 'bcryptjs'; // 需要安装: npm install bcryptjs @types/bcryptjs

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { action, username, password, answers } = req.body;

    if (action === 'register') {
      // 检查用户名是否已存在
      const { data: existingUser, error: existingError } = await supabase
        .from('users')
        .select('id')
        .eq('username', username)
        .single();

      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      // 密码哈希
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // 注册用户到数据库
      const { data: newUser, error: dbError } = await supabase
        .from('users')
        .insert([{
          username: username,
          password_hash: hashedPassword,
          security_q1: answers.q1,
          security_q2: answers.q2,
          security_q3: answers.q3
        }])
        .select()
        .single();

      if (dbError) {
        return res.status(500).json({ error: dbError.message });
      }

      res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
    } else if (action === 'login') {
      // 从数据库获取用户
      const { data: user, error: dbError } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .single();

      if (dbError || !user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      // 验证密码
      const isValid = await bcrypt.compare(password, user.password_hash);
      if (!isValid) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      // 返回用户信息
      res.status(200).json({ 
        message: 'Login successful',
        user: { id: user.id, username: user.username }
      });
    } else if (action === 'forgot-password') {
      // 忘记密码 - 验证安全问题
      const { username, answers, newPassword } = req.body;

      // 获取用户的安全问题答案
      const { data: user, error: dbError } = await supabase
        .from('users')
        .select('security_q1, security_q2, security_q3')
        .eq('username', username)
        .single();

      if (dbError || !user) {
        return res.status(400).json({ error: 'User not found' });
      }

      // 验证安全问题答案
      if (
        user.security_q1 !== answers.q1 ||
        user.security_q2 !== answers.q2 ||
        user.security_q3 !== answers.q3
      ) {
        return res.status(400).json({ error: 'Security answers do not match' });
      }

      // 更新密码
      const saltRounds = 10;
      const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

      const { error: updateError } = await supabase
        .from('users')
        .update({ password_hash: hashedNewPassword })
        .eq('username', username);

      if (updateError) {
        return res.status(500).json({ error: updateError.message });
      }

      res.status(200).json({ message: 'Password updated successfully' });
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}