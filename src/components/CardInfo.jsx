import React from "react";
import Avatar from "../images/Avatar.jpeg";
import { Link } from "react-router-dom";
const CardInfo = () => {
  return (
    <div className="data-card">
      <img
        src={Avatar}
        alt="Profile"
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1rem",
        }}
      />
      <h1>José Ignacio Diaz Romero</h1>
      <h2>Desarrollador Genexus</h2>
      <p>Argentina, Tucuman, Yerba Buena</p>
      <Link
        to="mailto:joseignaciodiazromero.dev@gmail.com"
        className="Link-inline"
      >
        joseignaciodiazromero.dev@gmail.com
      </Link>
      <Link
        className="Link-inline"
        to="https://wa.me/543814385138"
        target="_blank"
        rel="noopener noreferrer"
      >
        +54 3814385138
      </Link>
      {/* Add icons/links here if needed */}
    </div>
  );
};

export default CardInfo;
