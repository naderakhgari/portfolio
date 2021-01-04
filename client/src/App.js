import React from "react";
import "./App.css";
import "./grid.css";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Projects from "./Components/Projects";

import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title">
          <p>Nader Akhgari</p>
        </div>
        <div className="header-links">
          <a href="#projects" className="header-link">
            <p>Projects</p>
          </a>
          <a href="#contact" className="header-link">
            <p>Contact</p>
          </a>
          <a href="#about" className="header-link">
            <p>About</p>
          </a>
        </div>
      </header>
      <main className="main-container">
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="App-footer">
        <div className="footer-icons">
          <a
            href="https://github.com/naderakhgari"
            className="nolink"
            rel="noopener noreferrer"
            id="github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nader-akhgari/"
            className="nolink"
            rel="noopener noreferrer"
            id="linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/AkhgariNader"
            className="nolink"
            rel="noopener noreferrer"
            id="twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
