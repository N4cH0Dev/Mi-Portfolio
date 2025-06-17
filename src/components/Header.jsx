import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logoLight from "../images/Logo.png";
import logoDark from "../images/LogoDark.png"; // asegurate de tener esta imagen
import { useThemeStore } from "../store/useThemeStore";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogoClick = () => {
    setIsRotating(true);
    toggleTheme();
    setTimeout(() => setIsRotating(false), 1000);
  };

  return (
    <header
      className={`header${scrolled ? " header--scrolled" : " header--top"}`}
    >
      <div className="header__logo" onClick={handleLogoClick}>
        <img
          src={isDark ? logoDark : logoLight}
          alt="logo"
          className={isRotating ? "logo-rotate" : ""}
        />
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
              Sobre mí
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
