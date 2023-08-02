import { useResizeDetector } from "react-resize-detector";
import dynamic from "next/dynamic";

const PhotoAlbum = dynamic(() => import("@/components/PhotoAlbum"), {
    ssr: false
});

export default function Photos() {
    const { width, height, ref } = useResizeDetector();

    return (
        <div>
            <div ref={ref}>
                <PhotoAlbum
                    options={{
                        scrollButton: false
                    }}
                />
            </div>
        </div>
    );
}
