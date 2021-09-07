import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="d-print-none">
        <Link href="/">
          <a>
            <img
              src="/images/julian-logo.svg"
              className="logo"
              alt="julián-logo"
            ></img>
          </a>
        </Link>
        <Link href="/">
          <a className="over">Portfolio</a>
        </Link>
        <Link href="/">
          <a className="over">knowledge</a>
        </Link>
        <Link href="/About">
          <a className="over">About</a>
        </Link>
        <Link href="/CV">
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
