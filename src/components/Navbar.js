import './Navbar.css'
export default function Navbar() {
  const navbar = {
    logoDesc: "Masakan Maman"
  }

  return(
    <nav className="navbar-nav">
      <h2 className="logo">{navbar.logoDesc}</h2>
      <ul className="nav-list">
        <li><a href="/" >Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#/">Food</a></li>
        <li><a href="#/">Contact</a></li>
      </ul>
        <div className="hamburger-menu">
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </nav>
  );
}