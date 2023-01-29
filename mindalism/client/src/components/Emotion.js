import React, {useEffect, useState} from "react";
import Chart from 'react-apexcharts';
import Datas from './../journals.json'
import { Typography, Grid, Card, CardMedia, CardContent, Box} from "@mui/material";
import "../styles/SplitScreen.css";
// import SplitPane from "react-split-pane";

// const Analytics = () => {
//     return(
//         <div>
//             <Typography>
//                 Analytics!
//             </Typography>
//         </div>
//     );
// };


function Emotion(){
    
    return(
        
            <Card sx={{p: '1%'}} isplay="flex" justifyContent="center" alignItems="center">
            
            <Typography display='flex' alignItems="center" justifyContent='center' variant='h3' className='text-center'>Emotion of the Day</Typography>
                
            <div className="image-container">          
                <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-iTjailyp6rhUqqX1vqJQsRpk/user-XSSmj66PrzQyC4A89U6iA9vg/img-QknErvljFINROHydqE3I6eeu.png?st=2023-01-29T05%3A25%3A57Z&se=2023-01-29T07%3A25%3A57Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-28T23%3A38%3A17Z&ske=2023-01-29T23%3A38%3A17Z&sks=b&skv=2021-08-06&sig=ggDT3HusIR2NOZl0y3NfMMi1NquzFaWXOhGwRK/SJ7k%3D" width='50%' height='100%' ></img>
            </div>
                <Typography display='flex' alignItems="center" justifyContent='center' variant='h4' className='text-center' sx={{p: '4%'}}>Happy</Typography>
            </Card>
    )
}

export default Emotion;