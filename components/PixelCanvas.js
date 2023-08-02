import { useContext, useRef, useEffect, useState } from "react";
import ResizeContext from "./ResizeContext";

const pixelSize = 50;
const pixelGap = 1;
const pixelColors = {
    default: "gray",
    red: "red",
    orange: "orange",
    yellow: "yellow",
    green: "green",
    blue: "blue",
    purple: "purple"
};
const canvasHeight = 50;

export default function PixelCanvas() {
    const { width, height } = useContext(ResizeContext);
    const [fullScreen, setFullScreen] = useState(false);
    const canvasRef = useRef(null);
    const tilesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            let tiles = tilesRef.current;
            canvas.width = width;
            canvas.e;
            const ctx = canvas.getContext("2d");
            // Let's start by drawing out the squares
            for (let y = 0; y < canvasHeight; y++) {
                for (
                    let x = 0;
                    x < Math.round(width / pixelSize - width * pixelGap * 2);
                    x++
                ) {}
            }
        }
    }, [canvasRef]);

    return <canvas ref={canvasRef} />;
}
