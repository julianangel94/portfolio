import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <img src="/images/julian-logo.svg"></img>
        <Link href="/">
          <a>Portfolio</a>
        </Link>
        <Link href="/">
          <a>knowledge</a>
        </Link>
        <Link href="/CV">
          <a>CV</a>
        </Link>
      </nav>

      <style jsx>{`
        nav {
          background: #4d4d4d;
          display: flex;
          min-height: 8vh;
          height: 8vh;
          align-items: center;
          padding: 0;
        }

        nav ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        nav a {
          text-decoration: none;
          color: #e6213c;
          padding: 1.7rem 1rem;
          font-size: 17px;
        }

        nav a:hover {
          background-color: #e6213c;
          color: white;
        }
      `}</style>
    </>
  );
}
