import React from 'react'
import './styles/SimpleLineChart.css'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const SimpleLineChart = ({measurements, firstLine, secondLine}) => {
  return (
    <LineChart width={600} height={300} data={measurements}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey="date"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend />
      <Line type="monotone" dataKey={firstLine} stroke="#8884d8" activeDot={{r: 8}}/>
      <Line type="monotone" dataKey={secondLine} stroke="#82ca9d" activeDot={{r: 8}}/>
    </LineChart>
  );
}

export default SimpleLineChart