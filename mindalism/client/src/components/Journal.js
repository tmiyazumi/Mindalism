import React, {useEffect, useState} from "react";
import axios from "axios";
import { Typography, Grid, Button } from "@mui/material";

const Journal = () => {

    const [currDate, setCurrDate] = useState(null);

    useEffect(() => {
        setCurrDate(new Date().toISOString().slice(0,9));
    }, []);

    const record = (e) => {
        console.log("Requesting Speech To Text Script");
        console.log(currDate);
        return axios.post("http://localhost:5000/toTextJournal", {
            })
            .then((response) => {
                console.log(response)
            })
    }

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