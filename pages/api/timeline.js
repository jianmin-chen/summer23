import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  const { method } = req
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )

  if (method === 'GET') {
    try {
      const { user } = req.query
      if (!user) {
        // Get all users' timelines (excerpt)
        const { data, error } = await supabase
          .from('timeline')
          .select()
          .order('inserted_at', { ascending: false })
        if (error) throw new Error(error)
        return res.status(200).json({ success: true, comments: data })
      } else {
        // Get a specific user's timeline
      }
    } catch (err) {
      return res.status(500).json({ success: false, reason: err.toString() })
    }
  }
}
