import React, {useEffect, useState} from "react";
import axios from "axios";
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea, Dialog, DialogTitle, Popover, Paper, CardActions } from "@mui/material";

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
                </Grid>
            </Grid>
        </div>
    );
};

export default Journal;