import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styles/Journal.css";
import { CalendarPage } from "./Calendar.js"
import { Typography, Button, Grid, Card, CardMedia, CardContent, CardActionArea, Dialog, DialogTitle, Popover, Paper, CardActions } from "@mui/material";

import Datas from './../journals.json'


const record = (e) => {
    console.log("Requesting Speech To Text Script");
    return axios.post("http://localhost:5000/toTextJournal", {
            'Access-Control-Allow-Origin': 'http://localhost:5000/',
          })
          .then((response) => {

          })
}
const Journal = ({selectedDay}) => {
    selectedDay != null && new Date(selectedDay.year, selectedDay.month, selectedDay.day).toUTCString().slice(0, 9)
    var arr = [];
    Object.keys(Datas.dates["2023-01-29"]).forEach(function(key) {
    arr.push(Datas.dates["2023-01-29"][key]);
    });
    arr.pop();
    return(
        <div>
        
            {console.log(Datas)}
            <Grid container spacing={4} sx={{p: '2.5%'}}>
                <Grid item xs={4} sx={{p:'2.5%'}}>

                    <Typography variant="h2">
                        Your Journal
                    </Typography>
                </Grid>
                <div className="rectangle">
                    <ul className = "entries">
                        {arr.map(item => {
                            return(
                                <li>{item.entry}</li>
                            )
                        } )}
                    </ul>
                </div>
                <h2 className='summary'>Summary</h2>
                <div className="rectangle2">
                    {Datas.dates["2023-01-29"].summary}
                </div>
            </Grid>
        </div>

    );
};

export default Journal;