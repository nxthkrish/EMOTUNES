import "../styles/nav.css";
export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a className="li" href="http://localhost:3000/about">
            About us
          </a>
        </li>
        <li>
          <a className="li" href="http://localhost:3000/about">
            Contact us{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}
