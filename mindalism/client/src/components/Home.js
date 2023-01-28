import React from "react";
import "../styles/LandingPage.css";
import { Typography, Grid, Button } from "@mui/material";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="home-div">
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={5}
          container
          justify="center"
          alignItems="center"
        >
          <Typography
            className="main-text"
            variant="h2"
            sx={{
              paddingLeft: {
                xs: "0px",
                md: "30px",
              },
              paddingTop: {
                xs: "20px",
                md: "0px",
              },
            }}
          >
            Welcome to Mindalism, begin
            <div className="typew">
              <Typewriter
                skipAddStyles
                options={{
                  strings: [
                    "Speaking.",
                    "Analyzing.",
                    "Exploring.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <ScrollLink
              activeClass="active"
              to="About Us"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button variant="contained">Get Started</Button>
            </ScrollLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} container justifyContent="flex-end">
          <img
            src="/images/player.jpg"
            className="main-img"
            alt="Music Player"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
