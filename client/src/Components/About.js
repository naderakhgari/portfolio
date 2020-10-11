import React from "react";
import Nader from "../img/nader.jpg"

const About = () => {
  return (
    <div className="container about-container">
      <div className="col-8">
        <p className="about-me">About me</p>
        <p className="about-me-text">
          I am a proactive, dedicated, self-motivated person with a wide range
          of transferable skills in IT infrastructure. Strong team member
          capable of adapting well to new circumstances and conditions. I am
          comfortable with all aspects of learning and can adapt to new
          environments quickly. Currently seeking a role as a full-stack
          developer.
        </p>
      </div>
      <div className="col-4">
          <img src={Nader} alt="nader" className="nader-img col-12"/>
      </div>
    </div>
  );
};

export default About;
