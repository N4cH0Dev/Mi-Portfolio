import React from "react";
import "../styles/Footer.css";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex-social">
        <a
          href="https://www.linkedin.com/in/jose-ignacio-diaz-romero-219929339/"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinBoxFill />
        </a>
        <a
          href="mailto:joseignaciodiazromero.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IoIosMail />
        </a>
        <a href="https://github.com/N4cH0Dev" target="_blank" rel="noreferrer">
          <FaGithubSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
