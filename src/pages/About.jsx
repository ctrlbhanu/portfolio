import "../css/About.css";
export default function About() {
  return (
    <>
      <header className="page-header scroll-animate">
        <h1>About Me</h1>
      </header>

      <section
        className="about-content section-padding scroll-animate"
        style={{ paddingTop: "0" }}
      >
        <div className="about-text">
          <h2>Crafting the Perfect Frame</h2>
          <p>
            I am a Results-oriented Video Editor and Content Creator with 8+
            months of professional experience in video editing, videography,
            motion design, color grading, and digital storytelling. I am
            currently pursuing a Bachelor of Arts in Political Science at the
            University Of Delhi.
          </p>
          <p>
            In my recent roles, I have served as a Video Editor Intern at
            Unabashed Emotions, where I produced and edited both long-form and
            short-form video content, including VOX pops, explainers, and social
            media reels. Most recently, I stepped into the role of Creative and
            Design Coordinator at GITA, where I successfully led a full
            organizational rebrand, aligned content strategies, and developed
            their entire website from scratch.
          </p>
          <p>
            Beyond post-production, I bring a strong organizational background,
            having served as Head Of Social Media for the Ritva Deshbandhu
            Chapter and Joint Secretary for the Marketing Society of Deshbandhu
            College.
          </p>

          <h3 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
            Technical Toolkit
          </h3>
          <ul className="skills-list">
            <li>Adobe Premiere Pro</li>
            <li>Adobe After Effects</li>
            <li>Final Cut Pro</li>
            <li>Adobe Illustrator & Photoshop</li>
            <li>Color Grading</li>
            <li>Web Development & Design</li>
          </ul>
        </div>
      </section>
    </>
  );
}
