
import React from 'react';
// import { Line, Pie, Bar } from "react-chartjs-2";
import Paper from '@material-ui/core/Paper';
import Datas from './../journals.json'
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';


const data = [
    { argument:'Negative', value: Datas.analytics.polarityScore.neg },
    { argument:'Positive', value: Datas.analytics.polarityScore.pos },
    { argument:'Neutral', value: Datas.analytics.polarityScore.neu }
  ];

const PieChart = (props) => {
    return (
        <Paper>
        Test
        <Chart
          data={data}
        >
          <PieSeries valueField="value" 
            argumentField="argument" 
            innerRadius={0.6} />
          <Title text="Mental Stress Analysis"/>
        </Chart>
      </Paper>
    );
}

export default PieChart;