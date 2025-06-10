import React from "react";
import CardInfo from "../CardInfo";
import About from "../About";
import Projects from "../Projects";

const MainHome = () => {
  return (
    <div className="main-container">
      <CardInfo />
      <hr />
      <About />
      <hr />
      <Projects />
    </div>
  );
};

export default MainHome;
