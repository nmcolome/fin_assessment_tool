import React from 'react'
import './styles/CategoryBlock.css'
import DataCell from './DataCell'
import {getKey} from '../helper'

const CategoryBlock = ({catData, name}) => {
  const products = catData.map(product => {
    return <DataCell key={getKey()} prodData={product}/>
  })

  const catTotal = catData.reduce((obj, d) => {
    obj.net_sales_curr_year += +d.net_sales_curr_year
    obj.segment_contribution += +d.segment_contribution
    obj.net_sales_prev_year += +d.net_sales_prev_year
    obj.discounts_17 += +d.discounts_17
    return obj
  }, {
    net_sales_curr_year: 0,
    segment_contribution: 0,
    net_sales_prev_year: 0,
    discounts_17: 0
  })

  return (
    <div className='CategoryBlock'>
      <DataCell prodData={catTotal}/>
      {products}
    </div>
  )
}

export default CategoryBlock