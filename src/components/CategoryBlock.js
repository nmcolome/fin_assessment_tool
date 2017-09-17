import React from 'react'
import './styles/CategoryBlock.css'
import DataCell from './DataCell'
import {getKey} from '../helper'

const CategoryBlock = ({catData, name}) => {
  const products = catData.map(d => {
    return <DataCell key={getKey()} prod_data={d}/>
  })

  const catTotal = catData.reduce((obj, d) => {
    obj.net_sales_curr_year += +d.net_sales_curr_year
    obj.segment_contribution += +d.segment_contribution
    obj.net_sales_growth += +d.net_sales_growth
    obj.discount_percent += +d.discount_percent
    return obj
  }, {
    net_sales_curr_year: 0,
    segment_contribution: 0,
    net_sales_growth: 0,
    discount_percent: 0
  })

  return (
    <div className='CategoryBlock'>
      <DataCell prod_data={catTotal}/>
      {products}
    </div>
  )
}

export default CategoryBlock