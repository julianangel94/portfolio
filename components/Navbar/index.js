import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="d-print-none">
        <Link href="/" legacyBehavior>
          <a>
            <img
              src="/images/julian-logo.svg"
              className="logo"
              alt="julián-logo"
            ></img>
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="over">PROJECTS</a>
        </Link>
        <Link href="/About" legacyBehavior>
          <a className="over">ABOUT</a>
        </Link>
        <Link href="/CV" legacyBehavior>
          <a className="over">CV</a>
        </Link>
      </nav>

      <style jsx>{`
        nav {
          background: #171717;
          display: flex;
          min-height: 75px;
          height: 75px;
          align-items: center;
        }

        .over {
          text-decoration: none;
          color: #e6213c;
          padding: 1.5rem 1rem;
          font-size: 17px;
          font-weight: bold;
        }

        .over:hover {
          border-bottom: 0.3rem solid #e6213c;
          color: white;
        }

        .logo {
          padding-top: 0.5rem;
        }
      `}</style>
    </>
  );
}

        .over {
          text-decoration: none;
          color: #e6213c;
          padding: 1.5rem 1rem;
          font-size: 17px;
          font-weight: bold;
        }

        .over:hover {
          border-bottom: 0.3rem solid #e6213c;
          color: white;
        }

        .logo {
          padding-top: 0.5rem;
        }
      `}</style>
    </>
  );
}
