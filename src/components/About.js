import React from "react";
import AboutBackground from "../Assets/Abt_img.png";

import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
     
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Bringing Communities Together Through Events
        </h1>
        <p className="primary-text">
        CommunionHub is a platform dedicated to fostering community connections through events and support.
         


        </p>
        <p className="primary-text">
        Whether you're looking for social gatherings, religious events, or charity initiatives, we help bring people together in meaningful ways.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
