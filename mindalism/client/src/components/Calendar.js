import React, {useEffect, useState} from "react";
import axios from "axios";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from 'react-modern-calendar-datepicker';
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea, Dialog, DialogTitle, Popover, Paper, CardActions } from "@mui/material";

import '../styles/DatePicker.css';

const CalendarPage = () => {

    const [selectedDay, setSelectedDay] = useState(null);

    return(
        <div>
                <Grid container spacing={4} sx={{p: '2.5%'}}>
                    <Grid item xs={4} sx={{p:'2.5%'}}>
                        <Typography variant='h2' className='text-center'>Your Calendar</Typography>
                        <div className='calendar-container'>
                        <Calendar
                            value={selectedDay}
                            onChange={setSelectedDay}
                            shouldHighlightWeekends
                        />
                        </div>
                    </Grid>
                    <Grid item xs={8} sx={{p: '2.5%'}}>
                        <Card sx={{p: '2.5%'}}>
                            {
                                <p className='text-center'>
                                <span className='bold'>Selected date:</span>{' '}
                                {
                                    selectedDay != null && new Date(selectedDay.year, selectedDay.month, selectedDay.day).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
                                }
                                </p>
                            }
                        </Card>
                    </Grid>
                </Grid>
        </div>
    );
};

export default CalendarPage;