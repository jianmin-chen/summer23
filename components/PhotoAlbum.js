import { useResizeDetector } from 'react-resize-detector'
import styles from './PhotoAlbum.module.scss'
import modalStyles from './Modal.module.scss'
import { rotate, random } from '@/utils'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const defaultPhotos = new Array(52)
  .fill(0)
  .map((_, i) => i)
  .sort((a, b) => Math.random() - 0.5)

export function Album({ photos, options, setModal }) {
  const { width, height, ref } = useResizeDetector()

  return (
    <div className={styles.container}>
      <motion.div className={styles.inner} ref={ref}>
        {photos.map(i => (
          <motion.img
            loading="lazy"
            key={i}
            drag
            src={`https://pub-89101da5a5544ab78e0d8784ec0d65ae.r2.dev/${
              i + 1
            }.jpg`}
            alt={i + 1}
            className={styles.polaroid}
            style={{
              top: `${random(0, height)}px`,
              left: `${random(0, width)}px`,
              transform: `rotate(${rotate(-2, 2)}deg)`
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export function Modal() {
  return (
    <div className={modalStyles.wrapper}>
      <style jsx global>{`
        body,
        html {
          overflow-y: hidden;
        }
      `}</style>
      <div className={modalStyles.modal}>
        <Album
          photos={defaultPhotos}
          options={{
            scrollButton: false,
            buttonText: "yo it's sahiti"
          }}
        />
      </div>
    </div>
  )
}

export default function PhotoAlbum({
  photos = defaultPhotos,
  options = {
    scrollButton: true,
    buttonText: 'share your own, pls &darr;'
  }
}) {
  const [modal, setModal] = useState(false)
  return (
    <>
      {modal === true && <Modal />}
      <Album photos={photos} options={options} setModal={setModal} />
    </>
  )
}
