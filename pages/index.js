import Typing from "components/Typing";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="social">
          <a
            href="https://www.linkedin.com/in/juli%C3%A1n-%C3%A1ngel-arango-a587a6106/"
            target="_blank"
          >
            <img
              src="images/linkedin-logo.png"
              className="social-media"
              alt="linkedin-logo"
            />
          </a>
          <a
            href="https://www.instagram.com/julianangel94/?hl=es-la"
            target="_blank"
          >
            <img
              src="images/instagram-logo.png"
              className="social-media"
              alt="instagram-logo"
            />
          </a>
          <a href="https://www.facebook.com/julian.angelarango" target="_blank">
            <img
              src="images/facebook-logo.png"
              className="social-media"
              alt="facebook-logo"
            />
          </a>
        </div>
        <div className="my-name">
          <h1 className="main-text">
            <label style={{ color: "#e6213c" }}>Julián </label>
            &nbsp;
            <label style={{ color: "white" }}>Ángel</label>
          </h1>
          <Typing />
        </div>
        <div className="contact">
          <a href="Mailto:julianangel94@gmail.com">
            <img
              src="images/mail.png"
              className="contact-media"
              alt="mail-logo"
            />
          </a>
          <a href="Tel:+573168216424">
            <img
              src="images/call.png"
              className="contact-media"
              alt="call-logo"
            />
          </a>
        </div>
      </div>
      <div className="social-phone">
        <a
          href="https://www.linkedin.com/in/juli%C3%A1n-%C3%A1ngel-arango-a587a6106/"
          target="_blank"
        >
          <img
            src="images/linkedin-logo.png"
            className="social-media"
            alt="linkedin-logo"
          />
        </a>
        <a
          href="https://www.instagram.com/julianangel94/?hl=es-la"
          target="_blank"
        >
          <img
            src="images/instagram-logo.png"
            className="social-media"
            alt="instagram-logo"
          />
        </a>
        <a href="https://www.facebook.com/julian.angelarango" target="_blank">
          <img
            src="images/facebook-logo.png"
            className="social-media"
            alt="facebook-logo"
          />
        </a>
      </div>

      <style jsx>{`
        .main-text {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .my-name {
          display: flex;
          flex-direction: column;
        }

        .social {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .social-media {
          color: white;
          width: 21px;
          opacity: 0.6;
          margin: 0.5rem;
          transition: all 0.4s ease;
        }

        .social-media:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .contact {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .contact-media {
          margin: 10px;
          height: 30px;
          opacity: 0.6;
          transition: all 0.4s ease;
        }

        .contact-media:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .social-phone {
          display: none;
        }

        .main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: calc(100vh - 16vh);
          padding: 1rem;
          margin: 0 1rem;
        }

        @media (max-width: 600px) {
          .social {
            display: none;
          }

          .contact {
            display: none;
          }

          .social-phone {
            display: flex;
            justify-content: center;
            padding-bottom: 2rem;
            height: 8vh;
          }

          .main {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
