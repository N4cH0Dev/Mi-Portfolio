import React from "react";
import CardInfo from "../CardInfo";
import SectionAbout from "../SectionAbout";
import SectionProjects from "../SectionProjects";

const MainHome = () => {
  return (
    <div className="main-container">
      <CardInfo />
      <hr />
      <SectionAbout />
      <hr />
    </div>
  );
};

export default MainHome;
