import React from 'react'
import './styles/FirstColumn.css'
import CategoryBlock from './CategoryBlock'
import DataCell from './DataCell'
import {getKey} from '../helper'
import GlobalCat from './GlobalCat'

const FirstColumn = ({firstColData}) => {
  const consolidatedCats = Object.keys(firstColData).reduce((object, category) => {
    const consolidatedProd = firstColData[category].reduce((obj, d) => {
      if(!obj[d.products]) {
        obj[d.products] = {net_sales_curr_year: 0, net_sales_prev_year: 0, segment_contribution: 0, discounts_17:0}
      }
      obj[d.products].net_sales_curr_year += parseFloat(d.net_sales_curr_year)
      obj[d.products].net_sales_prev_year += parseFloat(d.net_sales_prev_year)
      obj[d.products].segment_contribution += parseFloat(d.segment_contribution)
      obj[d.products].discounts_17 += parseFloat(d.discounts_17)
      return obj
    }, {})
    object[category] = consolidatedProd
    return object
  }, {})

  const global_categories = Object.keys(consolidatedCats).map(category => {
    return <GlobalCat key={getKey()} gCatData={consolidatedCats[category]}/>
  })

  return (
    <div>{global_categories}</div>
  )
}

export default FirstColumn