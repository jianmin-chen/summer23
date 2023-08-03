import { useEffect, useRef } from 'react'
import styles from './SignHere.module.scss'

export default function SignHere({ side }) {
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
        mouseRef.current.x = event.clientX
        mouseRef.current.y = event.clientY
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
