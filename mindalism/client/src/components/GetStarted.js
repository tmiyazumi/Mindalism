import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import "../styles/LandingPage.css";
import { Link as ScrollLink } from "react-scroll";

const GetStarted = () => {
  return (
    <div id="GetStarted" className="home-div">
      <Typography
        className="main-text"
        sx={{
          fontWeight: 525,
          paddingLeft: {
            xs: "0px",
            md: "30px",
          },
          paddingTop: {
            xs: "30px",
            md: "0px",
          },
        }}
        variant="h2"
      >
        Get Started
      </Typography>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "90vh" }}
      >
        <Grid item xs={12} md={7} container justify="center" alignItems="left">
          <img
            src="/images/city.jpg"
            className="main-img"
            height="50%"
            width="50%"
            alt="join"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          container
          justify="center"
          alignItems="center"
        >
          <Typography className="main-text" variant="h2">
            Log in and go! <br />
            <ScrollLink
              activeClass="active"
              to="navbar"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button variant="contained">Back to the top</Button>
            </ScrollLink>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default GetStarted;
