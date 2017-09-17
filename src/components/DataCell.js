import React from 'react'
import './styles/DataCell.css'

const DataCell = ({prod_data}) => {
  return (
    <div className="grid-item data-cell">
      <div className="grid-item">{(prod_data.net_sales_curr_year/1000).toFixed(2)}</div>
      <div className="grid-item">{(prod_data.segment_contribution*100).toFixed(2)}%</div>
      <div className="grid-item">{(prod_data.net_sales_growth*100).toFixed(2)}%</div>
      <div className="grid-item">{(prod_data.discount_percent*100).toFixed(2)}%</div>
    </div>
  )
}

export default DataCell