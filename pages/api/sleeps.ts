import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { babyId } = req.query;

  if (!babyId) {
    return res.status(400).json({ error: 'Missing babyId' });
  }

  if (req.method === 'GET') {
    // 获取睡眠记录
    const { data, error } = await supabase
      .from('sleeps')
      .select('*')
      .eq('baby_id', babyId)
      .order('timestamp', { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    // 添加睡眠记录
    const { start, end, duration, timestamp } = req.body;
    
    const { data, error } = await supabase
      .from('sleeps')
      .insert([{ 
        baby_id: babyId, 
        start, 
        end, 
        duration, 
        timestamp 
      }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
  } else if (req.method === 'PUT') {
    // 更新睡眠记录
    const { id, start, end, duration, timestamp } = req.body;
    
    const { data, error } = await supabase
      .from('sleeps')
      .update({ start, end, duration, timestamp })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } else if (req.method === 'DELETE') {
    // 删除睡眠记录
    const { id } = req.query;
    
    const { error } = await supabase
      .from('sleeps')
      .delete()
      .eq('id', id);

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}