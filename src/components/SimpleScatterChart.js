import React from 'react'
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, ReferenceLine, CartesianAxis, Tooltip, Legend} from 'recharts'
import {getKey} from '../helper'

const defineColor = (investment, growth) => {
  if(investment > 0 && growth > 0) {
    return "#4CAE50"
  }
  if(investment < 0 && growth < 0) {
    return "#F34336"
  }
  if(investment > 0 && growth < 0) {
    return "#FE9700"
  }
  if(investment < 0 && growth > 0){
    return "#FEEA3B"
  }
}

const SimpleScatterChart = ({scatterData}) => {

  const dots = scatterData.map(client => {
    const investment = +((client.discounts_17 - client.discounts_16)/client.discounts_16 * 100).toFixed(2)
    const growth = +((client.net_sales_17 - client.net_sales_16)/client.net_sales_16 * 100).toFixed(2)
    return <Scatter name={client.client} data={[{x: investment, y: growth}]} fill={defineColor(investment, growth)} key={getKey()} />
  })

  return (
    <ScatterChart width={600} height={600} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      <ReferenceLine x={0} stroke='red' />
      <ReferenceLine y={0} stroke='red' />
      <XAxis type='number' domain={[-200, 200]} dataKey={'x'} name='investment' unit='%' tick={false} />
      <YAxis type='number' domain={[-200, 200]} dataKey={'y'} name='growth' unit='%' tick={false} />
      <Tooltip cursor={{strokeDasharray: '3 3'}}/>
      {dots}
    </ScatterChart>
  )
}

export default SimpleScatterChart