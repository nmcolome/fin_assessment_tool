import React from 'react'
import {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import {getKey} from '../helper'

const PositiveNegativeBarChart = ({clientData}) => {
  return(
    <BarChart width={800} height={300} data={clientData}
    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
    <XAxis dataKey="client"/>
    <YAxis/>
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>
    <Legend />
    <ReferenceLine y={0} stroke='#000'/>
    <Bar dataKey="salesGrowth" fill="#82ca9d" />
    <Bar dataKey="investmentGrowth" fill="#8884d8" />
    </BarChart>
  )
}

export default PositiveNegativeBarChart