import styles from "./Lyrics.module.scss";

const rotate = (min, max) => Math.random() * (max - min + 1) + min;

export default function Lyrics({ lyrics, background, embed }) {
    return (
        <div
            className={styles.wrapper}
            style={{
                background,
                transform: `rotate(${rotate(-0.2, 0.2)}deg)`
            }}>
            <div className={styles.content}>
                {lyrics.map((lyric, idx) => (
                    <p>{lyric}</p>
                ))}
                {embed}
            </div>
        </div>
    );
}
