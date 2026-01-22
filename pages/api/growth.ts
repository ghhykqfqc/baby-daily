import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { babyId } = req.query;

  if (!babyId) {
    return res.status(400).json({ error: 'Missing babyId' });
  }

  if (req.method === 'GET') {
    // 获取成长记录
    const { data, error } = await supabase
      .from('growth')
      .select('*')
      .eq('baby_id', babyId)
      .order('timestamp', { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    // 添加成长记录
    const { weight, height, date, timestamp } = req.body;
    
    const { data, error } = await supabase
      .from('growth')
      .insert([{ 
        baby_id: babyId, 
        weight, 
        height, 
        date, 
        timestamp 
      }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
  } else if (req.method === 'PUT') {
    // 更新成长记录
    const { id, weight, height, date, timestamp } = req.body;
    
    const { data, error } = await supabase
      .from('growth')
      .update({ weight, height, date, timestamp })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } else if (req.method === 'DELETE') {
    // 删除成长记录
    const { id } = req.query;
    
    const { error } = await supabase
      .from('growth')
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