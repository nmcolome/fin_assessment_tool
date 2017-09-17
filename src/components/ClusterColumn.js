import React from 'react'
import './styles/ClusterColumn.css'
import CategoryBlock from './CategoryBlock'
import DataCell from './DataCell'
import {getKey} from '../helper'

const ClusterColumn = ({clusterData}) => {

  const categoryData = clusterData.reduce((obj, d) => {
    const {products, categories, net_sales_curr_year, segment_contribution, net_sales_prev_year, discounts_17} = d
    if(!obj[categories]) {
      obj[categories] = []
    }
    obj[categories].push({products, net_sales_curr_year, segment_contribution, net_sales_prev_year, discounts_17})
    return obj
  }, {})

  const categories = Object.keys(categoryData).map(category => {
    return <CategoryBlock key={getKey()} catData={categoryData[category]}/>
  })

  const clusterTotal = clusterData.reduce((obj, d) => {
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

  return(
    <div className='ClusterColumn'>
      <DataCell prodData={clusterTotal}/>
      {categories}
    </div>
  )
}

export default ClusterColumn