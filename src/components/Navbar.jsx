import React, { useState } from "react";
import { Link } from "react-router-dom";



export default function Navbar() {

   const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo.jpeg" alt="Logo" />
        </Link>
      </div>

      <ul className={`nav-links ${isActive ? "active" : ""}`} onClick={toggleMenu}>
        <li><Link to="/">Catálogo</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>

      <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="menu-text">{isActive ? "Cerrar" : "Menú"}</span>
      </div>
    </nav>
  );
}


