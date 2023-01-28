import React, {useEffect, useState} from "react";
import axios from "axios";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from 'react-modern-calendar-datepicker';
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea, Dialog, DialogTitle, Popover, Paper, CardActions } from "@mui/material";

import '../styles/DatePicker.css';

const CalendarPage = () => {

    const [selectedDay, setSelectedDay] = useState(null);

    const dateSet = (e) => {
        setSelectedDay(e);
        console.log(selectedDay);
        console.log(selectedDay != null && new Date(selectedDay.year, selectedDay.month, selectedDay.day));
    }

    return(
        <div>
            <Typography>
                Calendar!
            </Typography>
                <Grid container spacing={4} sx={{pl: '2.5%', pt:'2.5%'}}>
                    <Grid item xs={8}>
                        <h1 className='text-center'>React Calendar with Range</h1>
                        <div className='calendar-container'>
                        <Calendar
                            value={selectedDay}
                            onChange={e => dateSet(e)}
                            shouldHighlightWeekends
                        />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        {
                            <p className='text-center'>
                            <span className='bold'>Selected date:</span>{' '}
                            {
                                selectedDay != null && new Date(selectedDay.year, selectedDay.month, selectedDay.day)
                            }
                            </p>
                        }
                    </Grid>
                </Grid>
        </div>
    );
};

export default CalendarPage;