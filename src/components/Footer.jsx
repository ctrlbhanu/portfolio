import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer fade-in">
      <div className="footer-top">
        <h2>Let's Create</h2>
        <a
          href="mailto:bhanuverma2605@gmail.com"
          className="cta-btn hover-target"
        >
          Get in Touch
        </a>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-grid">
        <div className="footer-col">
          <h3>Contact</h3>
          <a
            href="mailto:bhanuverma2605@gmail.com"
            className="footer-link hover-target"
          >
            bhanuverma2605@gmail.com
          </a>
          <a href="tel:+917982506187" className="footer-link hover-target">
            +91-7982506187
          </a>
        </div>

        <div className="footer-col">
          <h3>Connect</h3>
          <a
            href="https://www.linkedin.com/in/bhanuverma05/"
            target="_blank"
            rel="noreferrer"
            className="footer-link hover-target"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/regular_ol_bhanu/"
            target="_blank"
            rel="noreferrer"
            className="footer-link hover-target"
          >
            Instagram
          </a>
          <a
            href="https://bhanusniceportfolio.webflow.io/"
            target="_blank"
            rel="noreferrer"
            className="footer-link hover-target"
          >
            Previous Webflow Site
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Bhanu Verma. All rights reserved.</p>
      </div>
    </footer>
  );
}
