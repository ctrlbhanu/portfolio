import { useRef, useEffect } from "react";
import "../css/ProjectCard.css";

export default function ProjectCard({
  title,
  thumbSrc,
  videoSrc,
  link,
  className,
  isActive, // Added to track state
  onActivate, // Added to trigger state
}) {
  const videoRef = useRef(null);

  // This watches the isActive state and plays/pauses automatically
  useEffect(() => {
    if (isActive) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Rewind to 0s
        videoRef.current.play(); // Play video
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause(); // Pause when it goes back to the arc
      }
    }
  }, [isActive]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      // Apply the active-card class if React says it's active
      className={`project-card ${className} ${isActive ? "active-card" : ""} hover-target`}
      onMouseEnter={onActivate}
    >
      <div className="card-window">
        {/* Retro Window Header */}
        <div className="window-header">
          <div className="window-controls">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <span className="window-title">{title}</span>
        </div>

        {/* Media Content */}
        <div className="card-media">
          <img src={thumbSrc} alt={title} className="card-thumb" />
          <video
            ref={videoRef}
            src={videoSrc}
            className="card-video"
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
    </a>
  );
}
