import React, {useEffect, useState} from "react";
import Chart from 'react-apexcharts';
import Datas from './../journals.json'
import { Typography, Grid, Card, CardMedia, CardContent} from "@mui/material";



function calcAnalytics(){
    const lineChart = [
        {
            name: "Positivity Rate",
            data: [19, 22, 20, 26,3,34,52]
        }
      ];
      const lineOption = {
        chart: {
          id: "simple-bar"
        },
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu","Fri","Sat","Sun"]
        }
    
      };

    const barChart = [
        {
          name: "Temperature in Fahrenheit", //will be displayed on the y-axis
          data: [43, 53, 50, 57]
        }
      ];
      const barOption = {
        chart: {
          id: "simple-bar"
        },
        xaxis: {
          categories: ['Dec', 'Jan', 'Feb', 'Mar'] //will be displayed on the x-asis
        }
    
      };
      
      return (
        <React.Fragment>
        <Typography display='flex' alignItems="center" justifyContent='center' variant='h3' className='text-center' sx={{p: '4%'}}>Weekly Entry Analysis</Typography>
        <Grid item xs={6} sx={{p: '1%'}} alignItems='center'>  
            <Card sx={{p: '4%'}}>
            <div>
            <Chart options={lineOption} type="line" series={lineChart} width="100%" height="250%" />
            </div>
            </Card>
        </Grid>
        <Typography display='flex' alignItems="center" justifyContent='center' variant='h4' className='text-center' sx={{p: '4%'}}>Weekly Average: </Typography>
        <Grid item xs={6} sx={{p: '1%'}} backgroundColor='#ECF9FF' alignItems='center'>  
            <Typography display='flex' alignItems="center" justifyContent='center' variant='h3' className='text-center' sx={{p: '4%'}}>Montly Entry Analysis</Typography>
            <Card sx={{p: '4%'}}>
            <div>
            <Chart options={barOption} type="bar" series={barChart} width="100%" height="250%" />
            </div>
            </Card>
            <Typography display='flex' alignItems="center" justifyContent='center' variant='h4' className='text-center' sx={{p: '4%'}}>Monthly Average: </Typography>
        </Grid>

        </React.Fragment>
        
      );
}

export default calcAnalytics;