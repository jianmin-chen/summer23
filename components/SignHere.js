import { useEffect, useRef } from "react";
import styles from "./SignHere.module.scss";

export default function SignHere({ side }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
    }, []);

    return <canvas className={styles.container} ref={canvasRef} />;
}
