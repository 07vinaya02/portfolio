// import React from 'react'
import "./Hero.css";
import myimg from "../../assets/img.jpg";
const Home = () => {
  return (
    <div id="home" className="hero">
      <img src={myimg} />
      <h1>
        <span>I am Vinaya K ,</span>frontend developer in India.
      </h1>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Home;
