import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/supabaseClient';
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { action, username, password, answers } = req.body;

    if (action === 'register') {
      const { data: existingUser, error: existingError } = await supabase
        .from('users')
        .select('id')
        .eq('username', username)
        .maybeSingle();

      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const { data: newUser, error: dbError } = await supabase
        .from('users')
        .insert([{
          username: username,
          password_hash: hashedPassword,
          security_q1: answers.q1,
          security_q2: answers.q2,
          security_q3: answers.q3
        }])
        .select('id, username')
        .single();

      if (dbError) {
        return res.status(500).json({ error: dbError.message });
      }

      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } else if (action === 'login') {
      const { data: user, error: dbError } = await supabase
        .from('users')
        .select('id, username, password_hash')
        .eq('username', username)
        .single();

      if (dbError || !user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const isValid = await bcrypt.compare(password, user.password_hash);
      if (!isValid) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      res.status(200).json({ 
        message: 'Login successful',
        user: { id: user.id, username: user.username }
      });
    } else if (action === 'forgot-password') {
      const { username, answers, newPassword } = req.body;

      const { data: user, error: dbError } = await supabase
        .from('users')
        .select('id, security_q1, security_q2, security_q3')
        .eq('username', username)
        .single();

      if (dbError || !user) {
        return res.status(400).json({ error: 'User not found' });
      }

      if (
        user.security_q1 !== answers.q1 ||
        user.security_q2 !== answers.q2 ||
        user.security_q3 !== answers.q3
      ) {
        return res.status(400).json({ error: 'Security answers do not match' });
      }

      const saltRounds = 10;
      const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

      const { error: updateError } = await supabase
        .from('users')
        .update({ password_hash: hashedNewPassword })
        .eq('id', user.id);

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