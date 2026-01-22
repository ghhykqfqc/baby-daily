import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { babyId } = req.query;

  if (!babyId) {
    return res.status(400).json({ error: 'Missing babyId' });
  }

  if (req.method === 'GET') {
    // 获取喂养记录
    const { data, error } = await supabase
      .from('feedings')
      .select('*')
      .eq('baby_id', babyId)
      .order('timestamp', { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    // 添加喂养记录
    const { type, volume, time, timestamp, note } = req.body;
    
    const { data, error } = await supabase
      .from('feedings')
      .insert([{ 
        baby_id: babyId, 
        type, 
        volume, 
        time, 
        timestamp, 
        note 
      }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
  } else if (req.method === 'PUT') {
    // 更新喂养记录
    const { id, type, volume, time, timestamp, note } = req.body;
    
    const { data, error } = await supabase
      .from('feedings')
      .update({ type, volume, time, timestamp, note })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } else if (req.method === 'DELETE') {
    // 删除喂养记录
    const { id } = req.query;
    
    const { error } = await supabase
      .from('feedings')
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