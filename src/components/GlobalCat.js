import React from 'react'
import './styles/GlobalCat.css'
import DataCell from './DataCell'
import {getKey} from '../helper'

const GlobalCat = ({gCatData}) => {
  const products = Object.keys(gCatData).map(product => {
    return <DataCell key={getKey()} prodData={gCatData[product]}/>
  })

  const gCat = Object.keys(gCatData).reduce((obj, prod) => {
    obj.net_sales_curr_year += +gCatData[prod].net_sales_curr_year
    obj.segment_contribution += +gCatData[prod].segment_contribution
    obj.net_sales_prev_year += +gCatData[prod].net_sales_prev_year
    obj.discounts_17 += +gCatData[prod].discounts_17
    return obj
  }, {
    net_sales_curr_year: 0,
    segment_contribution: 0,
    net_sales_prev_year: 0,
    discounts_17: 0
  })
  return (
    <div>
      <DataCell prodData={gCat}/>
      {products}
    </div>
  )
}

export default GlobalCat