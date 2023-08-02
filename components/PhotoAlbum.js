import { useResizeDetector } from "react-resize-detector";
import styles from "./PhotoAlbum.module.scss";
import { rotate, random } from "@/utils";
import { motion } from "framer-motion";

const defaultPhotos = new Array(62).fill(0);

export default function PhotoAlbum({ photos = defaultPhotos }) {
    const { width, height, ref } = useResizeDetector();

    return (
        <div className={styles.container}>
            <motion.div className={styles.inner} ref={ref}>
                {photos.map((_, i) => (
                    <motion.img
                        key={i}
                        drag
                        src={`https://pub-89101da5a5544ab78e0d8784ec0d65ae.r2.dev/jc${
                            i + 1
                        }.jpg`}
                        className={styles.polaroid}
                        loading="lazy"
                        style={{
                            top: `${random(0, height)}px`,
                            left: `${random(0, width)}px`,
                            transform: `rotate(${rotate(-2, 2)}deg)`
                        }}
                    />
                ))}
                <marquee>
                    <button>share your own, pls &darr;</button>
                </marquee>
            </motion.div>
        </div>
    );
}
