import React, {useEffect, useState} from "react";
import axios from "axios";
import { Typography, Button, Grid, Card, CardMedia, CardContent, CardActionArea, Dialog, DialogTitle, Popover, Paper, CardActions } from "@mui/material";


const record = (e) => {
    console.log("Requesting Speech To Text Script");
    return axios.post("http://localhost:5000/toTextJournal", {
            'Access-Control-Allow-Origin': 'http://localhost:5000',
          })
          .then((response) => {
          })
}

const Journal = () => {
    return(
        <div>
            <Grid container spacing={4} sx={{p: '2.5%'}}>
                <Grid item xs={4} sx={{p:'2.5%'}}>
                    <Typography variant="h2">
                        Your Journal
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{p:'2.5%'}}>
                    <Typography variant="h2">
                        Journal Entry
                    </Typography>
                    <Button variant="contained" onClick={(e) => record(e)}>Contained</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Journal;