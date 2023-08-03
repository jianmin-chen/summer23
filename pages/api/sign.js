import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  const { method } = req
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )

  if (method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('sign')
        .select()
        .order('inserted_at', { ascending: false })
      if (error) throw new Error(error)
      return res.status(200).json({ success: true, signed: data })
    } catch (err) {}
  }
}
