import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // 获取宝宝信息
    const { babyId } = req.query;
    
    if (!babyId) {
      return res.status(400).json({ error: 'Missing babyId' });
    }

    const { data, error } = await supabase
      .from('babies')
      .select('*')
      .eq('id', babyId)
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    // 创建宝宝信息
    const { user_id, name, birth_date } = req.body;
    
    const { data, error } = await supabase
      .from('babies')
      .insert([{ user_id, name, birth_date }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
  } else if (req.method === 'PUT') {
    // 更新宝宝信息
    const { id, name, birth_date } = req.body;
    
    const { data, error } = await supabase
      .from('babies')
      .update({ name, birth_date })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}