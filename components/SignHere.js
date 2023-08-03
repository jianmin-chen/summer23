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
        let { x, y, color, type } = mouseRef.current

        // Mouse left button must be pressed
        if (event.buttons !== 1) return

        ctx.beginPath()
        ctx.lineWidth = 5
        ctx.lineCap = 'round'
        ctx.strokeStyle = color

        ctx.moveTo(x, y)
        setPosition(event)
        ctx.lineTo(x, y)

        ctx.stroke()
      }

      window.addEventListener('resize', resize)
      document.addEventListener('mousemove', draw)
      document.addEventListener('mousedown', setPosition)
      document.addEventListener('mouseenter', setPosition)

      return () => {
        window.removeEventListener('resize', resize)
        document.removeEventListener('mousemove', draw)
        document.removeEventListener('mousedown', setPosition)
        document.removeEventListener('mouseenter', setPosition)
      }
    }
  }, [])

  return <canvas className={styles.container} ref={canvasRef} />
}
