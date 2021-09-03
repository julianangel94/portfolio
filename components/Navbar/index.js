export default function Navbar() {
  return (
    <>
      <div name="navigation-content">
        <div className="navigation-close">
          <span className="close-first"></span>
          <span className="close-second"></span>
        </div>
        <div className="navigation-links">
          <a href="#" data-text="HOME" name="home-link">
            HOME
          </a>
          <a href="#" data-text="ABOUT" name="about-link">
            ABOUT
          </a>
          <a href="#" data-text="BLOG" name="blog-link">
            BLOG
          </a>
          <a href="#" data-text="PORTFOLIO" name="portfolio-link">
            PORTFOLIO
          </a>
          <a href="#" data-text="CONTACT" name="contact-link">
            CONTACT
          </a>
        </div>
      </div>
      <div name="navigation-bar">
        <div className="menubar">
          <span className="first-span"></span>
          <span className="second-span"></span>
          <span className="third-span"></span>
        </div>
      </div>
      <style jsx>{`
        #navigation-content {
          height: 100vh;
          width: 100%;
          position: fixed;
          z-index: 5;
          background-color: #020202;
          transform: translateY(-200%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        #navigation-bar {
          position: fixed;
          height: 100px;
          width: 100%;
          z-index: 3;
          padding: 10px;
          background: transparent;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
