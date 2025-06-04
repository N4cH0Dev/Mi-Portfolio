import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/Logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`header${scrolled ? " header--scrolled" : " header--top"}`}
    >
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <button className="header__toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
        <ul>
          <li>
            <Link to="/" className="Link" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="Link"
              onClick={() => setMenuOpen(false)}
            >
              Sobre mi
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="Link"
              onClick={() => setMenuOpen(false)}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="Link"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
