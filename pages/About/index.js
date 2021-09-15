const About = () => {
  return (
    <>
      <section className="about-content">
        <h1 className="title">
          <label style={{ color: "white" }}>About</label>
          &nbsp;
          <label style={{ color: "#e6213c" }}>Me</label>
        </h1>
        <h3 className="main-text">
          <label style={{ color: "white" }}>Get to Know</label>
          &nbsp;
          <label style={{ color: "#e6213c" }}>me.</label>
        </h3>
        <div className="about-main">
          <div className="description">
            <h1 className="main-text">
              <label style={{ color: "white" }}> I'm creative</label>
              &nbsp;
              <label style={{ color: "#e6213c" }}>web developer</label>
              &nbsp;
              <label style={{ color: "white" }}>
                based in Medellín, Colombia
              </label>
            </h1>
            <br />
            <p>
              With 4 years of experience as a professional Web developer, I have
              acquired the skills and knowledge necessary to make your project a
              success. I enjoy every step while working.
            </p>
            <div className="cv">
              <a href="/CV">
                <button>View CV</button>
              </a>
            </div>
          </div>
          <div className="about-img">
            <img src="images/About.jpg" alt="Your Image" className="image" />
          </div>
        </div>
      </section>

      <section className="knowledge-content">
        <h1 className="title">
          <label style={{ color: "#e6213c" }}>My</label>
          &nbsp;
          <label style={{ color: "white" }}>Knowledge</label>
        </h1>
        <div className="knowledge-main">
          <div className="knowledge">
            <div className="knowledge-img">
              <img src="images/coding.png" alt="knowledge-one" />
            </div>
            <div className="knowledge-description">
              <h2>Front end</h2>
              <p>
                I have knowledge in html and css also with the bootstrap
                framework, javascipt with its angular framework and its react
                library.
              </p>
            </div>
          </div>
          <div className="knowledge">
            <div className="knowledge-img">
              <img src="images/coding.png" alt="knowledge-two" />
            </div>
            <div className="knowledge-description">
              <h2>Back end</h2>
              <p>
                I have knowledge on programming languages like c# ​​with its
                framework .NET and typescript.
              </p>
            </div>
          </div>
          <div className="knowledge">
            <div className="knowledge-img">
              <img src="images/coding.png" alt="knowledge-three" />
            </div>
            <div className="knowledge-description">
              <h2>Data base</h2>
              <p>Database management with sql server and oracle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-content">
        <h1 className="title">
          <label style={{ color: "white" }}>My</label>
          &nbsp;
          <label style={{ color: "#e6213c" }}>Skills</label>
        </h1>
        <div className="skills-main">
          <div className="left-skills">
            <div className="skill-html skill">
              <div className="skill-text">
                <div className="html">HTML/CSS</div>
              </div>
              <div className="html-prog prog">
                <div className="progress" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>
            <div className="skill-html skill">
              <div className="skill-text">
                <div className="html">Javascript</div>
              </div>
              <div className="html-prog prog">
                <div className="progress" style={{ width: "70%" }}>
                  70%
                </div>
              </div>
            </div>
            <div className="skill-html skill">
              <div className="skill-text">
                <div className="html">SQL</div>
              </div>
              <div className="html-prog prog">
                <div className="progress" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>
          </div>
          <div className="right-skills">
            <div className="skill-html skill">
              <div className="skill-text">
                <div className="html">C#</div>
              </div>
              <div className="html-prog prog">
                <div className="progress" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>
            <div className="skill-html skill">
              <div className="skill-text">
                <div className="html">GIT</div>
              </div>
              <div className="html-prog prog">
                <div className="progress" style={{ width: "78%" }}>
                  78%
                </div>
              </div>
            </div>
            <div className="skill-html skill">
              <div className="skill-text">
                <div className="html">Frameworks</div>
              </div>
              <div className="html-prog prog">
                <div className="progress" style={{ width: "75%" }}>
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .about-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 90vh;
          padding: 1rem 4rem;
        }

        p {
          color: white;
          font-size: 1.6rem;
        }

        .about-main {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image {
          width: 100%;
          min-width: 500px;
          height: 100%;
          padding: 0.5rem;
          border-radius: 50%;
        }

        .title {
          font-size: 4rem;
        }

        .cv {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 3rem;
        }

        .description {
          padding: 1rem;
        }

        button {
          border: none;
          padding: 15px 30px;
          color: white;
          background: #e6213c;
          font-size: 20px;
          border-radius: 4px;
          font-weight: 400;
          transition: all 0.4s ease;
        }

        button:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        .knowledge-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 90vh;
          padding: 1rem 4rem;
        }

        .knowledge-main {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 4rem;
        }

        .knowledge {
          display: flex;
          flex-direction: column;
          min-height: 380px;
          width: 28%;
          margin: 1.5%;
          background-color: #333333;
          box-shadow: 0 0 25px rgb(0, 0, 0, 0.05);
          z-index: 2;
          border-radius: 10px;
          overflow: hidden;
          animation: opacity 1.4s ease;
          text-align: center;
        }

        .knowledge-img img {
          z-index: 2;
          margin: 20px;
          border-radius: 30%;
          padding: 10px;
          border: 0 solid #e6213c;
          background: #e6213c;
          box-shadow: 0 0 0 0 #e6213c;
          height: 100px;
          transition: all 0.8s ease;
        }

        .knowledge:hover .knowledge-img img {
          box-shadow: 0 0 0 400px #e6213c;
        }

        .knowledge-description {
          color: white;
          z-index: 2;
        }

        .knowledge-description h2 {
          padding: 10px;
          margin: 5px;
          font-weight: 500;
          font-size: 30px;
        }

        .knowledge-description p {
          padding: 10px;
          font-weight: 200;
          font-size: 20px;
          opacity: 0.8;
        }

        .skills-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 90vh;
          padding: 1rem 4rem;
        }

        .skills-main {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
          width: 100%;
        }

        .left-skills {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .right-skills {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .prog {
          height: 30px;
        }

        .skills-header {
          height: auto;
          width: 100%;
          text-align: center;
          align-items: center;
          justify-content: center;
          font-size: 45px;
          color: white;
          padding: 10px;
          padding-bottom: 30px;
          padding-top: 30px;
          font-weight: 900;
        }

        .skill-html {
          height: auto;
          padding: 0%;
          color: white;
          padding: 1.5%;
        }

        .skill-text {
          width: 100%;
          padding: 0.5rem 0;
        }

        .html-prog {
          width: 100%;
          height: 2rem;
          border-radius: 10px;
          background: #333333;
          box-shadow: 0px 0px 25px rgb(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          padding: 0 0.2rem;
        }

        .progress {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #e6213c;
          height: 80%;
        }

        @media (max-width: 1200px) {
          .about-content {
            height: 100%;
          }

          .image {
            display: none;
          }

          .knowledge-content {
            height: 100%;
          }

          .knowledge-main {
            flex-direction: column;
            align-items: center;
          }

          .knowledge {
            height: 100%;
            min-width: 450px;
          }

          .skills-content {
            height: 100%;
          }

          .skills-main {
            flex-direction: column;
          }
        }

        @media (max-width: 450px) {
          .knowledge {
            min-width: 310px;
          }
        }
      `}</style>
    </>
  );
};

export default About;
