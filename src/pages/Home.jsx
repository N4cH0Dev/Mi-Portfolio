import React from "react";
import MainHome from "../components/Mains/MainHome";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Home.css";
const Home = () => {
  return (
    <div>
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
};

export default Home;
