import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  const { method } = req
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )

  if (method === 'GET') {
    try {
      // Get either timeline snippets of all or timeline of specific user
      const { user } = req.query
      if (!user) {
        const { data, error } = await supabase
          .from('timeline')
          .select()
          .order('user')
        if (error) throw new Error(error)
        return res.status(200).json({ success: true, timelines: data })
      } else {
        // Get specific user
        const { data, error } = await supabase
          .from('timeline')
          .select({
            user
          })
          .order('date', { ascending: false })
        if (error) throw new Error(error)
        return res.status(200).json({ success: true, timeline: data })
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        reason: err.toString()
      })
    }
  } else if (method === 'POST') {
    // Add timeline under user
    try {
      const { user, content } = req.body
      if (!user || !content) return res.status(401)
      for (let date of content) {
        const { error } = await supabase.from('timeline').insert({
          date,
          user, // Probably user id
          ...content[date]
        })
        if (error) throw new Error(error)
      }
      return res.status(200)
    } catch (err) {
      return res.status(500).json({
        success: false,
        reason: err.toString()
      })
    }
  } else return res.status(404)
}
