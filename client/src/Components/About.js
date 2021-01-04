import React from "react";
import Nader from "../img/nader.jpg";

const About = () => {
  return (
    <div className="container about-container">
      <div className="col-4">
        <img src={Nader} alt="nader" className="nader-img col-12" />
      </div>
      <div className="col-8">
        <p className="about-me">About me</p>
        <p className="about-me-text">
          Dedicated full stack developer with one year experience in building
          scalable web applications and databases after completing
          CodeYourFuture Bootcamp. I have a degree in BEng Software Engineering
          and experience in full-stack technologies. Self-motivated person with
          a wide range of transferable skills in IT infrastructure and a strong
          team player. Seeking to further improve my programming skills and open
          to opportunities to work as Full Stack Developer.
        </p>
      </div>
    </div>
  );
};

export default About;
