import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import gita from "../assets/GITA.mp4";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import car from "../assets/carousel.png";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

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
          style={{ opacity: 1 - scrollY / 700 }}
        >
          <div
            className="hero-content fade-in-up"
            style={{ transform: `translateY(-${scrollY * 0.3}px)` }}
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
              <Link to="/projects" className="btn-primary">
                Discover &rarr;
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn more &rarr;
              </Link>
            </div>
          </div>

          <div className="hero-image-gallery">
            <img
              src={hero1}
              className="floating-img img-1"
              style={{ transform: `translateY(-${scrollY * 0.4}px)` }}
              alt="p1"
            />
            <img
              src={hero2}
              className="floating-img img-2"
              style={{ transform: `translateY(-${scrollY * 0.15}px)` }}
              alt="p2"
            />
            <img
              src={hero3}
              className="floating-img img-3"
              style={{ transform: `translateY(-${scrollY * 0.6}px)` }}
              alt="p3"
            />
            <img
              src={car}
              className="floating-img img-4"
              style={{ transform: `translateY(-${scrollY * 0.25}px)` }}
              alt="p4"
            />
            <img
              src={hero1}
              className="floating-img img-5"
              style={{ transform: `translateY(-${scrollY * 0.8}px)` }}
              alt="p5"
            />
            <img
              src={hero2}
              className="floating-img img-6"
              style={{ transform: `translateY(-${scrollY * 0.55}px)` }}
              alt="p6"
            />
          </div>
        </div>
      </section>

      {/* --- SECOND SECTION --- */}
      <section className="creative-flair-section">
        <div
          className="flair-box"
          onMouseEnter={() => {
            if (videoRef.current) videoRef.current.currentTime = 0;
          }}
        >
          <div className="flair-text">
            <h2>WITH A CREATIVE FLAIR LIKE NO OTHER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/about" className="btn-outline">
              Read more about us
            </Link>
          </div>

          <div className="flair-images">
            <div className="media-container">
              <img src={car} alt="Creative Flair" className="flair-img" />
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
