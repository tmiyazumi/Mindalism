import React from "react";
import { Card, Grid, CardHeader, Typography } from "@mui/material";
import "../styles/LandingPage.css";
import { Box } from "@mui/system";

const AboutUs = () => {
  return (
    <div id="about" className="About Us">
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
        About Mindalism
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "95vh" }}
      >
        <Grid item xs={12} md={3} container justify="center">
          <Card className="card-size">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: {
                  xs: "10px",
                },
              }}
            >
              <img src="/images/trail.png" className="icon-img" alt="trail" />
            </Box>
            <CardHeader
              title={"Speak"}
              subheader={
                "Record journal entries and track your mood on the go with automatic mood detection"
              }
              className="card-title"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={3} container justify="center">
          <Card className="card-size">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: {
                  xs: "10px",
                },
              }}
            >
              <img src="/images/album.png" className="icon-img" alt="album" />
            </Box>
            <CardHeader
              title={"Summarize"}
              subheader={
                "See your month at a glance with automatic journal entry summarization"
              }
              className="card-title"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={3} container justify="center">
          <Card className="card-size">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: {
                  xs: "10px",
                },
              }}
            >
              <img src="/images/graph.png" className="icon-img" alt="graph" />
            </Box>
            <CardHeader
              title={"Explore"}
              subheader={
                "Analyze and explore your changes in your mood over time"
              }
              className="card-title"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
