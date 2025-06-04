import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div>
      <Header />
      <h1></h1>
      <Footer />
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Contact;
