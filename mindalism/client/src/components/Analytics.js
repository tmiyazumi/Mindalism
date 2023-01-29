import React, {useEffect, useState} from "react";
import Chart from 'react-apexcharts';
import Datas from './../journals.json'
import { Typography, Grid, Card, CardMedia, CardContent} from "@mui/material";
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


function Analytics(){
    
    return(
        <React.Fragment>
            <Card sx={{p: '1%'}}>
                <div className='container-fluid mt-3 mb-3 mb:grid-cols-2'>      
     
                <Typography display='flex' alignItems="center" justifyContent='center' variant='h3' className='text-center'>Journal Entry Analysis</Typography>
                <Chart 
                type="donut"
                width={600}
                height={600}
                series={[123,32,231]}
                options={{
                labels:['Negative', 'Positive', 'Neutral'],
                title:{
                    //text:"Jounal Mental Analysis" 
                // align:"center",
                },
                plotOptions:{
                pie:{
                    donut:{
                        labels:{
                            show:true,
                            total:{
                                show:true,
                                showAlways:true,
                                //formatter: () => '343',
                                fontSize:50,
                                color: '#f90000',
                            }
                        }
                    }
                }
                },
                dataLabels:{
                    textAnchor: 'end',
                    enabled:true,
                }
                }}
                />
                </div>
            </Card>
        </React.Fragment>
    )
}

export default Analytics;