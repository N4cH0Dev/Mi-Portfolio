import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";
const App = () => {
  const { isDark } = useThemeStore();
  return (
    <div className={isDark ? "dark-gradient" : "light-gradient"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
