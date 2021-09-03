import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <div name="nav-logo">
          <img src="/images/julian-logo.svg"></img>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        nav {
          background: #4d4d4d;
          padding: 0.5rem 0rem;
          display: flex;
        }

        .nav-logo {
        }
      `}</style>
    </>
  );
}
