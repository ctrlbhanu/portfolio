import { useRef } from "react";
import "../css/ProjectCard.css";
export default function ProjectCard({
  title,
  role,
  thumbSrc,
  videoSrc,
  link,
  delay,
}) {
  const videoRef = useRef(null);

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="grid-item scroll-animate hover-target"
      style={{ transitionDelay: delay }}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className="video-container">
        <img
          src={thumbSrc}
          alt={`${title} Thumbnail`}
          className="static-thumb"
        />
        <video
          ref={videoRef}
          className="hover-vid"
          muted
          loop
          playsInline
          src={videoSrc}
        ></video>
      </div>
      <div className="item-details">
        <h3>{title}</h3>
        <p className="roles">{role}</p>
      </div>
    </a>
  );
}
