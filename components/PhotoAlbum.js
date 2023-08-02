import { useResizeDetector } from "react-resize-detector";
import styles from "./PhotoAlbum.module.scss";
import modalStyles from "./Modal.module.scss";
import { rotate, random } from "@/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const defaultPhotos = new Array(62).fill(0);

export function Album({ photos, options, setModal }) {
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
                {options.scrollButton === true ? (
                    <marquee>
                        <button
                            onClick={() => setModal(true)}
                            dangerouslySetInnerHTML={{
                                __html: options.buttonText
                            }}
                        />
                    </marquee>
                ) : (
                    <button
                        onClick={() => setModal(true)}
                        dangerouslySetInnerHTML={{ __html: options.buttonText }}
                    />
                )}
            </motion.div>
        </div>
    );
}

export function Modal() {
    useEffect(() => {
        window.addEventListener();
    }, []);

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
    );
}

export default function PhotoAlbum({
    photos = defaultPhotos,
    options = {
        scrollButton: true,
        buttonText: "share your own, pls &darr;"
    }
}) {
    const [modal, setModal] = useState(false);
    return (
        <>
            {modal === true && <Modal />}
            <Album photos={photos} options={options} setModal={setModal} />
        </>
    );
}
