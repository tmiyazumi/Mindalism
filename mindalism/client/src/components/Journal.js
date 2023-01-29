import React, {useEffect, useState} from "react";
import axios from "axios";
import { Typography, Box, Grid, Button, Card, CardContent, LinearProgress, Stack } from "@mui/material";
import Typewriter from "typewriter-effect";
import data from '../2023-01-29.json';

export const JournalArea = ({loading, text, record}) => {
    if (loading == false && !text) {
        return (
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '25px'}}>
                <Button variant="contained" onClick={() => record()}>Record Entry</Button>
            </Box>
        )
    } else if (text != null && loading == false){
        return (
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '25px'}}>
                <Typewriter
                    skipAddStyles
                    options={{
                    strings: text,
                    autoStart: true,
                    loop: false,
                    }}
                />
            </Box>
        )
    } else {
        console.log("this is recload: ")
        console.log(loading);
        console.log("this is rectext: ")
        console.log(text);
        return (
            <Stack sx={{ width: '100%', color: 'grey.500', mt: '25px' }} spacing={2}>
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack>
        )
    } 
};

const Journal = () => {

    const [recLoad, setRecLoad] = useState(false);
    const [recText, setRecText] = useState(null);

    const record = () => {
        setRecLoad(true);
        console.log("Requesting Speech To Text Script");
        return axios.post("http://localhost:5000/toTextJournal", {
            })
            .then((response) => {
                console.log(response)
                setRecText(data.entry);
                setRecLoad(false);
            })
    }

    // useEffect(() => {

    // }, [recLoad, recText])    

    return(
        <div>
            <Card sx={{p: '2.5%'}}>
                <CardContent >
                    <Typography display='flex' alignItems="center" justifyContent='center' variant="h4">
                        Your Journal
                    </Typography>
                    <JournalArea 
                        loading={ recLoad }
                        text={ recText }
                        record={ record }
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default Journal;