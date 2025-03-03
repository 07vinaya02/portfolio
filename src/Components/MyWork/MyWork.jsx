// import React from 'react'
import "./MyWork.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import mywork_data from "../../assets/mywork_data";
const MyWork = () => {
  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src="../../assets/mywork_data.js" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src="{work.w_img" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <ArrowForwardIcon />
      </div>
    </div>
  );
};

export default MyWork;
