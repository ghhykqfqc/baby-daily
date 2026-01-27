import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { babyId } = req.query;

  if (!babyId) {
    return res.status(400).json({ error: 'Missing babyId' });
  }

  if (req.method === 'GET') {
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
    const { weight, height, date, timestamp } = req.body;
    
    if (!weight || !height || !date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await supabase
      .from('growth')
      .insert([{ 
        baby_id: babyId, 
        weight: String(weight), 
        height: String(height), 
        date, 
        timestamp: timestamp || new Date(date).getTime()
      }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
  } else if (req.method === 'PUT') {
    const { id, weight, height, date, timestamp } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: 'Missing id' });
    }

    const { data, error } = await supabase
      .from('growth')
      .update({ weight: String(weight), height: String(height), date, timestamp })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({ error: 'Missing id' });
    }

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