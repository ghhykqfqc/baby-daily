import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { userId, babyId } = req.query;
    
    if (userId && !babyId) {
      const { data, error } = await supabase
        .from('babies')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json(data);
    } else if (babyId) {
      const { data, error } = await supabase
        .from('babies')
        .select('*')
        .eq('id', babyId)
        .single();

      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json(data);
    } else {
      return res.status(400).json({ error: 'Missing userId or babyId' });
    }
  } else if (req.method === 'POST') {
    const { user_id, name, birth_date } = req.body;
    
    if (!user_id || !name || !birth_date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

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
    const { id, name, birth_date } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: 'Missing id' });
    }

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