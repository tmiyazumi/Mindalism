import React, {useEffect, useState} from "react";
import axios from "axios";
import { Typography, Box, Grid, Button, Card, CardContent } from "@mui/material";
import data from '../2023-01-28.json';

const Journal = () => {

    const [recLoad, setRecLoad] = useState(false);
    const [recText, setRecText] = useState(null);

    const record = (e) => {
        console.log("Requesting Speech To Text Script");
        return axios.post("http://localhost:5000/toTextJournal", {
            })
            .then((response) => {
                console.log(response)
            })
    }

    return(
        <div>
            <Card sx={{p: '2.5%'}}>
                <CardContent >
                    <Typography display='flex' alignItems="center" justifyContent='center' variant="h4">
                        Your Journal
                    </Typography>
                    
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '25px'}}>
                        <Button variant="contained" onClick={(e) => record(e)}>Record Entry</Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default Journal;