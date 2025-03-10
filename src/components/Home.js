import React from "react";
import { useNavigate } from "react-router-dom"; 
import BannerImage from "../Assets/Khirodh_Kumar_Objective_Build_a_simple_two-page_React_web_app_wi_ce1feab5-127e-4363-acc8-a600c13ce2fa.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import About from "./About";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Connecting People Across Faiths & Interests
          </h1>
          <p className="primary-text">
            Connecting people of all faiths through events and community support.
          </p>
          <button className="secondary-button" onClick={() => navigate("/events")}>
            Explore Events <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default Home;
