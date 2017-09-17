import React from 'react'
import './styles/DataCell.css'

const DataCell = () => {
  return (
    <div className="grid-item data-cell">
    <div className="grid-item">TO</div>
    <div className="grid-item">Contribution</div>
    <div className="grid-item">Growth%</div>
    <div className="grid-item">TMI%</div>
  </div>
  )
}

export default DataCell