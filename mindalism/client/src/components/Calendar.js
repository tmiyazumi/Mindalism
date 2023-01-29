import React, {useEffect, useState} from "react";
import axios from "axios";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from 'react-modern-calendar-datepicker';
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea, Dialog, DialogTitle, Popover, Paper, CardActions } from "@mui/material";
import Journal from "./Journal";

import '../styles/DatePicker.css';

const CalendarPage = () => {
    
    const defaultDay = {
        year: new Date().getUTCFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDay(),
    }

    const [selectedDay, setSelectedDay] = useState(defaultDay);

    return(
        <div>
            <Card sx={{px: '2.5%', mx: '5%', mt: '2.5%', mb: '1%'}}>
                {
                    <p className='text-center'>
                    <Typography display='flex' alignItems="center" justifyContent='center' variant='h4'>
                    {
                        selectedDay != null && new Date(selectedDay.year, selectedDay.month, selectedDay.day).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
                    }
                    </Typography>
                    </p>
                }
            </Card>
            <Grid container spacing={3} sx={{p: '2%'}}>
                <Grid item xs={4} sx={{p:'1%'}}>
                    <Card>
                        <CardContent>
                            <Typography display='flex' alignItems="center" justifyContent='center' variant='h4' className='text-center'>Your Calendar</Typography>
                            <div className='calendar-container'>
                            <Calendar
                                value={selectedDay}
                                onChange={setSelectedDay}
                                shouldHighlightWeekends
                            />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} sx={{p: '1%'}}>
                    <Journal />
                </Grid>
            </Grid>
        </div>
    );
};

export default CalendarPage;