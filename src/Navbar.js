// Navbar.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      // Delay scroll until route change completes
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // wait briefly for DOM to load
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">MemoryLink</div>
        <ul className="nav-links">
        <li><button className="nav-btn" onClick={() => handleScroll("home")}>Home</button></li>
        <li><button className="nav-btn" onClick={() => handleScroll("features")}>Features</button></li>
        <li><button className="nav-btn" onClick={() => handleScroll("about")}>About</button></li>
        <li><button className="nav-btn" onClick={() => handleScroll("contact")}>Contact</button></li>
        <li><Link className="nav-link-btn" to="/dashboard">Dashboard</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;
