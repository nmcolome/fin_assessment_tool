import React from 'react'
import './styles/DataCell.css'

const DataCell = ({prodData}) => {
  return (
    <div className="grid-item data-cell">
      <div className="grid-item">{(prodData.net_sales_curr_year/1000).toFixed(2)}</div>
      <div className="grid-item">{(prodData.segment_contribution*100).toFixed(2)}%</div>
      <div className="grid-item">{((prodData.net_sales_curr_year - prodData.net_sales_prev_year) / prodData.net_sales_prev_year * 100).toFixed(2)}%</div>
      <div className="grid-item">{(prodData.discounts_17 / prodData.net_sales_curr_year * 100).toFixed(2)}%</div>
    </div>
  )
}

export default DataCell