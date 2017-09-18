import React from 'react'
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import {getKey} from '../helper'

const TinyBarChart = ({clientData}) => {

  const data = clientData.map(clientObj => {
    const sales = +clientObj.net_sales_17
    const growth = +((clientObj.net_sales_17 - clientObj.net_sales_16)/clientObj.net_sales_16 * 100).toFixed(2)
    return { client: clientObj.client, sales: sales, salesGrowth: growth }
  })

  return(
    <ComposedChart layout="vertical" width={400} height={350} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      <XAxis type="number"/>
      <YAxis dataKey="client" type="category"/>
      <Tooltip/>
      <Legend/>
      <Bar dataKey='sales' barSize={20} fill='#413ea0'/>
    </ComposedChart>
  )
}

export default TinyBarChart