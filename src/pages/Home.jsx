import { useState, useEffect, useRef } from "react"; // <-- Added useRef here
import { Link } from "react-router-dom";
import "../css/Home.css";
import gita from "../assets/GITA.mp4";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import car from "../assets/carousel.png";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // 1. Create the reference to grab the video
  const videoRef = useRef(null);

  // Tracks your scroll to power the 3D parallax math
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div
          className="hero-parallax-wrapper"
          style={{ opacity: 1 - scrollY / 600 }}
        >
          {/* THE TEXT LAYER */}
          <div
            className="hero-content fade-in-up"
            style={{ transform: `translateY(-${scrollY * 0.25}px)` }}
          >
            <h1 className="hero-title">
              HEY, I'M A VIDEO
              <br />
              EDITOR AND A<br />
              GRAPHICS
              <br />
              DESIGNER
            </h1>
            <p className="hero-subtitle">
              channeling my passion into crafting stories that resonate
              emotionally.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn-primary hover-target">
                Discover &rarr;
              </Link>
              <Link to="/about" className="btn-secondary hover-target">
                Learn more &rarr;
              </Link>
            </div>
          </div>

          {/* THE 3D IMAGE GALLERY */}
          <div className="hero-image-gallery">
            {/* Image 1: Fades in first */}
            <img
              src={hero1}
              alt="Project 1"
              className="floating-img img-1 slow-fade delay-img-1"
              style={{ transform: `translateY(-${scrollY * 0.45}px)` }}
            />

            {/* Image 2: Fades in second */}
            <img
              src={hero2}
              alt="Project 2"
              className="floating-img img-2 slow-fade delay-img-2"
              style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
            />

            {/* Image 3: Fades in last */}
            <img
              src={hero3}
              alt="Project 3"
              className="floating-img img-3 slow-fade delay-img-3"
              style={{ transform: `translateY(-${scrollY * 0.75}px)` }}
            />
          </div>
        </div>
      </section>

      {/* --- SECOND SECTION --- */}
      <section className="creative-flair-section scroll-animate">
        {/* 2. Added onMouseEnter to reset the video time to 0 */}
        <div
          className="flair-box"
          onMouseEnter={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
            }
          }}
        >
          <div className="flair-text">
            <h2>WITH A CREATIVE FLAIR LIKE NO OTHER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/about" className="btn-outline hover-target">
              Read more about us
            </Link>
          </div>

          <div className="flair-images">
            {/* The container that holds both the image and video */}
            <div className="media-container">
              {/* Note: Fixed variable name from 'hero' to 'car' so it doesn't crash! */}
              <img src={car} alt="Creative Flair" className="flair-img" />

              {/* 3. Attached the ref to your video */}
              <video
                ref={videoRef}
                src={gita}
                autoPlay
                muted
                loop
                playsInline
                className="flair-video"
              ></video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
