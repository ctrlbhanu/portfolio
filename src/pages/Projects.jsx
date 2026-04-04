import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <header className="page-header scroll-animate">
        <h1>Selected Works</h1>
        <p>Editing • Motion Design</p>
      </header>

      <section
        className="full-project-grid section-padding"
        style={{ paddingTop: "0" }}
      >
        <ProjectCard
          title="GITA"
          role="Creative & Design Coordinator"
          thumbSrc="/assets/thumb-gita.jpg"
          videoSrc="/assets/preview-gita.mp4"
          link="https://gita-global.in/#/"
          delay="0s"
        />
        <ProjectCard
          title="Unabashed Emotions"
          role="Video Editor Intern"
          thumbSrc="/assets/thumb-viral.jpg"
          videoSrc="/assets/preview-viral.mp4"
          link="#"
          delay="0.1s"
        />
        <ProjectCard
          title="Swiggy: A Passion Project"
          role="Videography & Post-Production"
          thumbSrc="/assets/thumb-swiggy.jpg"
          videoSrc="/assets/preview-swiggy.mp4"
          link="https://www.instagram.com/reel/DL4IBVbSRjo/"
          delay="0.2s"
        />
        <ProjectCard
          title="Ritva Deshbandhu Chapter"
          role="Head of Social Media"
          thumbSrc="/assets/thumb-skit.jpg"
          videoSrc="/assets/preview-skit.mp4"
          link="https://www.instagram.com/reel/DREASoJEI7A/"
          delay="0.3s"
        />
      </section>
    </>
  );
}
