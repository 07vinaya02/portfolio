// import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>AboutMe</h1>
        <img src="https://th.bing.com/th/id/OIP.rWMzlQliBlpUX8Ysi0dpIgHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="https://th.bing.com/th/id/OIP.9z2otRrrhtqNmr2ny-FivwHaLG?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>my passion is become a frontend developer</p>
            <p>i am a fresher and i am a self leaner</p>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML&CSS</p>
                <hr style={{ width: "50 %" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Python</p>
                <hr style={{ width: "80%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
