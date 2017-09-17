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
      obj[d.products].net_sales_curr_year += +(d.net_sales_curr_year)
      obj[d.products].net_sales_prev_year += +(d.net_sales_prev_year)
      obj[d.products].segment_contribution += +(d.segment_contribution)
      obj[d.products].discounts_17 += +(d.discounts_17)
      return obj
    }, {})
    object[category] = consolidatedProd
    return object
  }, {})

  const global_categories = Object.keys(consolidatedCats).map(category => {
    return <GlobalCat key={getKey()} gCatData={consolidatedCats[category]}/>
  })

  const global = Object.keys(consolidatedCats).reduce((object, category) => {
    const globalCat = Object.keys(consolidatedCats[category]).reduce((obj,d) => {
      obj.net_sales_curr_year += +consolidatedCats[category][d].net_sales_curr_year
      obj.segment_contribution += +consolidatedCats[category][d].segment_contribution
      obj.net_sales_prev_year += +consolidatedCats[category][d].net_sales_prev_year
      obj.discounts_17 += +consolidatedCats[category][d].discounts_17
      return obj
    }, {
      net_sales_curr_year: 0,
      segment_contribution: 0,
      net_sales_prev_year: 0,
      discounts_17: 0
    })
    object.net_sales_curr_year += +globalCat.net_sales_curr_year
    object.segment_contribution += +globalCat.segment_contribution
    object.net_sales_prev_year += +globalCat.net_sales_prev_year
    object.discounts_17 += +globalCat.discounts_17
    return object
  }, {
    net_sales_curr_year: 0,
    segment_contribution: 0,
    net_sales_prev_year: 0,
    discounts_17: 0
  })

  return (
    <div>
      <DataCell prodData={global}/>
      <div>{global_categories}</div>
    </div>
  )
}

export default FirstColumn