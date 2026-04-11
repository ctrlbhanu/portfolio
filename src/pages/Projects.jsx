import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../css/ProjectCard.css";

export default function Projects() {
  // This state Remembers which card is currently popped out
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="projects-page">
      {/* Background Header - Fixed the color to #ffffff (White) */}
      <header
        className="page-header"
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          textAlign: "right",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 10vw, 8rem)",
            fontWeight: 900,
            color: "#ffffff",
          }}
        >
          SELECTED
          <br />
          WORKS
        </h1>
      </header>

      {/* If the mouse leaves this massive container, it resets all cards */}
      <div
        className={`projects-radial-container ${activeCard ? "has-active" : ""}`}
        onMouseLeave={() => setActiveCard(null)}
      >
        <div className="radial-anchor">
          <ProjectCard
            title="GITA — COORDINATION"
            thumbSrc="/assets/thumb-gita.jpg"
            videoSrc="/assets/preview-gita.mp4"
            link="https://gita-global.in/#/"
            className="pos-1"
            isActive={activeCard === "gita"}
            onActivate={() => setActiveCard("gita")}
          />
          <ProjectCard
            title="UNABASHED EMOTIONS — EDIT"
            thumbSrc="/assets/thumb-viral.jpg"
            videoSrc="/assets/preview-viral.mp4"
            link="#"
            className="pos-2"
            isActive={activeCard === "viral"}
            onActivate={() => setActiveCard("viral")}
          />
          <ProjectCard
            title="SWIGGY — PASSION"
            thumbSrc="/assets/thumb-swiggy.jpg"
            videoSrc="/assets/preview-swiggy.mp4"
            link="https://www.instagram.com/reel/DL4IBVbSRjo/"
            className="pos-3"
            isActive={activeCard === "swiggy"}
            onActivate={() => setActiveCard("swiggy")}
          />
          <ProjectCard
            title="RITVA — SOCIAL"
            thumbSrc="/assets/thumb-skit.jpg"
            videoSrc="/assets/preview-skit.mp4"
            link="https://www.instagram.com/reel/DREASoJEI7A/"
            className="pos-4"
            isActive={activeCard === "ritva"}
            onActivate={() => setActiveCard("ritva")}
          />
        </div>
      </div>
    </div>
  );
}
