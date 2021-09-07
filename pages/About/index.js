const About = () => {
  return (
    <>
      <div className="about-content">
        <h1 className="main-text">
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
      </div>
      <div className="knowledge-content">
        <h1>
          <label style={{ color: "#e6213c" }}>My</label>
          &nbsp;
          <label style={{ color: "white" }}>Knowledge</label>
        </h1>
        <div className="knowledge-main">
          <div className="service">
            <div className="service-img">
              <img src="images/coding.png" alt="service-one" />
            </div>
            <div className="service-description">
              <h2>Front end</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quibusdam possimus
              </p>
            </div>
          </div>
          <div className="service">
            <div className="service-img">
              <img src="images/coding.png" alt="service-two" />
            </div>
            <div className="service-description">
              <h2>Back end</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quibusdam possimus
              </p>
            </div>
          </div>
          <div className="service">
            <div className="service-img">
              <img src="images/coding.png" alt="service-three" />
            </div>
            <div className="service-description">
              <h2>Data base</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quibusdam possimus
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: calc(100vh - 8vh);
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
          width: 580px;
          height: 520px;
          padding: 0.5rem;
          border-radius: 10%;
        }

        .cv {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 3rem;
        }

        button {
          border: none;
          padding: 15px 30px;
          color: white;
          background: #e6213c;
          outline: none;
          font-size: 20px;
          font-family: aileron;
          border-radius: 4px;
          font-weight: 400;
          cursor: pointer;
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
          height: calc(100vh - 8vh);
          padding: 1rem 4rem;
        }

        .knowledge-main {
          display: flex;
          justify-content: space-between;
          padding-top: 3rem;
        }

        .service {
          display: flex;
          flex-direction: column;
          height: 380px;
          width: 28%;
          margin: 1.5%;
          background-color: #333333;
          box-shadow: 0px 0px 25px rgb(0, 0, 0, 0.05);
          z-index: 2;
          border-radius: 10px;
          overflow: hidden;
          animation: opacity 1.4s ease;
          text-align: center;
        }

        .service-img img {
          z-index: 2;
          margin: 20px;
          border-radius: 30%;
          padding: 10px;
          border: 0px solid #c70039;
          background: #c70039;
          box-shadow: 0px 0px 0px 0px #c70039;
          height: 100px;
          transition: all 0.8s ease;
        }
        .service:hover .service-img img {
          box-shadow: 0px 0px 0px 400px #c70039;
        }
        .service-description {
          color: white;
          z-index: 2;
        }
        .service-description h2 {
          padding: 10px;
          margin: 5px;
          font-weight: 200;
          font-size: 25px;
        }
        .service-description p {
          padding: 10px;
          font-weight: 200;
          font-size: 16px;
          opacity: 0.8;
        }
      `}</style>
    </>
  );
};

export default About;
