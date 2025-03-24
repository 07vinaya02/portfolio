// import React from 'react'
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

import myimg from "../../assets/img.jpg";
const Home = () => {
  return (
    <div id="home" className="hero">
      <img src={myimg} />
      <h1>
        <span>I am Vinaya K ,</span>frontend developer in India.
      </h1>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a className="resume" href="/file.pdf" download="file.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
