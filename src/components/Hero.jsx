import { useRef } from "react";
import { useEffect } from "react";

const Hero = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    }, []);
    return (
        <>
            <section id="hero">
                <div>
                    <h1>MackBook Pro</h1>
                    <img src="./title.png" all="title image"></img>
                </div>
                <video ref={videoRef} src="./videos/hero.mp4" al="video hero" autoPlay playsInline muted></video>
                <button>Buy</button>
                <p>From $1599 or $133/mo for 12 months</p>
            </section>
            {console.log(videoRef.current)}
        </>
    );
};

export default Hero; 