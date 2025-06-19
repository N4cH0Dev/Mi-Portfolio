import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainAbout from "../components/mains/MainAbout";
import "../styles/About.css";
const About = () => {
  return (
    <div>
      <Header />
      <MainAbout />
      <Footer></Footer>
    </div>
  );
};

export default About;
