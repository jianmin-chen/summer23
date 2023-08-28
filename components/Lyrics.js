import styles from './Lyrics.module.scss'
import { rotate } from '@/utils.js'

export default function Lyrics({ lyrics, background, embed, ...props }) {
  return (
    <div
      className={styles.wrapper}
      {...props}
      style={{
        background,
        transform: `rotate(${rotate(-0.2, 0.2)}deg)`
      }}>
      <div className={styles.content}>
        {lyrics.map((lyric, idx) => (
          <p key={idx}>{lyric}</p>
        ))}
        {embed !== undefined && embed}
      </div>
    </div>
  )
}
