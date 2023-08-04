import { useEffect, useRef, useState } from 'react'
import styles from './SignHere.module.scss'
import { random, rotate, randomOutlier } from '@/utils'
import Lyrics from './Lyrics'

export function Old({ side }) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({
    x: 0,
    y: 0,
    color: 'black',
    type: 'draw'
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      let ctx = canvas.getContext('2d')

      const resize = () => {
        canvas.height = window.scrollY + window.innerHeight
      }

      resize()

      const setPosition = event => {
        const rect = event.target.getBoundingClientRect()
        mouseRef.current.x = event.clientX - rect.left - 5
        mouseRef.current.y = event.clientY - rect.top - 5
      }

      const draw = event => {
        // Mouse left button must be pressed
        if (event.buttons !== 1) return

        ctx.beginPath()
        ctx.lineWidth = 5
        ctx.lineCap = 'round'
        ctx.strokeStyle = mouseRef.current.color

        ctx.moveTo(mouseRef.current.x, mouseRef.current.y)
        setPosition(event)
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y)

        ctx.stroke()
      }

      window.addEventListener('resize', resize)
      canvas.addEventListener('mousemove', draw)
      canvas.addEventListener('mousedown', setPosition)
      canvas.addEventListener('mouseenter', setPosition)

      return () => {
        window.removeEventListener('resize', resize)
        canvas.removeEventListener('mousemove', draw)
        canvas.removeEventListener('mousedown', setPosition)
        canvas.removeEventListener('mouseenter', setPosition)
      }
    }
  }, [])

  return <canvas className={styles.container} ref={canvasRef} />
}

export default function New({ signs = [], side }) {
  const [notes, setNotes] = useState(signs)

  return (
    <div
      className={styles.container}
      onClick={() => {
        const content = prompt('write your own, pls')
        if (content) {
          const name = prompt(
            'and your name, pls keep in mind this is moderated'
          )
          if (name) {
            fetch('/api/sign', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                sign: content,
                user: name
              })
            }).then(res => {
              setNotes([...notes, { sign: content, user: name }])
            })
          }
        }
      }}>
      {notes.map((note, idx) => (
        <div
          className={styles.note}
          key={idx}
          style={{
            transform: `rotate(${rotate(-5, 5)}deg)`,
            margin: `-${random(-50, 50)}px`
          }}>
          <p>{note.sign}</p>
          <p className={styles.name}>- {note.user}</p>
        </div>
      ))}
    </div>
  )
}
