import { useEffect, useRef } from "react";

const Intro = ({ onFinish }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Precarga del video
        const preloadVideo = () => {
            if (videoRef.current) {
                videoRef.current.load();
                // Iniciamos la precarga
                videoRef.current.preload = "auto";
                
                // Cuando el video esté listo para reproducirse
                videoRef.current.oncanplaythrough = () => {
                    videoRef.current.play();
                };
                
                videoRef.current.onended = () => {
                    onFinish();
                };
            }
        };

        preloadVideo();
    }, [onFinish]);

    return (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                playsInline
                muted
                preload="auto"
            >
                <source src="/web.webm" type="video/webm" />
                <source src="/web.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default Intro;
