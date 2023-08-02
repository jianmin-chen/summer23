import styles from "./PhotoAlbum.module.scss";

const defaultPhotos = new Array(62).fill(0);

/*
{photos.map((_, i) => (
                    <img
                        src={`https://pub-89101da5a5544ab78e0d8784ec0d65ae.r2.dev/jc${
                            i + 1
                        }.jpg`}
                        key={i}
                        className={styles.polaroid}
                    />
 */

export default function PhotoAlbum({ photos = defaultPhotos }) {
    return (
        <div className={styles.container}>
            <div className={styles.inner}></div>
        </div>
    );
}
