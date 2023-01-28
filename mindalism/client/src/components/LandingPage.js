import React from "react";
import "../styles/LandingPage.css";
import Home from "./Home.js";
import GetStarted from "./GetStarted.js";
import AboutUs from "./AboutUs.js";

const LandingPage = () => {
  return (
    <div id="home" className="home-div">
      <Home />
      <AboutUs />
      <GetStarted />
    </div>
  );
};

export default LandingPage;
