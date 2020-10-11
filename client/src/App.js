import React from "react";
import "./App.css";
import "./grid.css";

import {FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Projects from "./Components/Projects";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Cv from "./Components/CV";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title">
        <p>Nader Akhgari</p>
        </div>
        <div className="header-links">
          <a href="/" className="header-link"><p>Home</p></a>
        <a href="/contact" className="header-link"><p>Contact</p></a>
        <a href="/about" className="header-link"><p>About</p></a>
        </div>
      </header>
      <Router className="main">
				<div className="body-container">
					<Switch>
						<Route exact path="/about">
							<About />
						</Route>
            <Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
            <Route exact path="/projects">
							<Projects />
						</Route>
            <Route exact path="/cv">
							<Cv />
						</Route>
					</Switch>
				</div>
			</Router>
      {/* <div className="container body-container">
        <div>
        <p>This is the portfolio body</p>
        </div>
        <Projects />
      </div> */}
      <footer className="App-footer">
        <div className="footer-icons">
        <a href="https://github.com/naderakhgari" className="nolink" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/nader-akhgari/" className="nolink" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/AkhgariNader" className="nolink" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
