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
      return res.status(200).json({ success: true, sign: data })
    } catch (err) {
      return res.status(500).json({
        success: false,
        reason: err.toString()
      })
    }
  } else if (method === 'POST') {
    try {
      const { error } = await supabase
        .from('sign')
        .insert({ sign: req.body.sign, user: req.body.user })
      if (error) throw new Error(error)
      return res.satus(200)
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message })
    }
  }
}
