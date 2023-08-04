import { createClient } from '@supabase/supabase-js'
import AWS from 'aws-sdk'

const S3 = new AWS.S3({
  endpoint: new AWS.Endpoint(process.env.R2_ENDPOINT),
  accessKeyId: process.env.R2_ID,
  secretAccessKey: process.env.R2_SECRET
})

const upload = params =>
  new Promise((resolve, reject) => {
    S3.upload(params, (err, data) => {
      if (err) return reject(err)
      return resolve(data)
    })
  })

export default async function handler(req, res) {
  // Add photo to Cloudflare - CORS open only to this site so don't worry about it
  // Actually, just use AWS lol
  const { method } = req
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )

  if (method === 'POST') {
    try {
      const { photos, user } = req.body
      if (!photos || !user) throw new Error('Parameters not provided')
      let urls = []
      for (let data in photos) {
        const { photo, filename } = data
        const params = {
          Bucket: config.R2_BUCKET,
          Key: filename,
          Body: photo
        }
        await upload(params)
        urls.push(process.env.R2_PUBLIC + `/${filename}`)
        const { error } = await supabase.from('photos').insert({
          user,
          url: urls[-1]
        })
        if (error) throw new Error(error)
      }
      return res.status(200).json({
        success: true,
        urls
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        reason: err.toString()
      })
    }
  } else return res.status(500)
}
