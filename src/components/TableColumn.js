import React from 'react'
import './styles/TableColumn.css'

const TableColumn = ({data}) => {
  return(
    <section className='data-column'>
      <articles className='data-cel'>{data.date}</articles>
      <articles className='data-cel'>{(data.sales/1000).toFixed(2)}</articles>
      <articles className='data-cel'>{(data.discount/1000).toFixed(2)}</articles>
      <articles className='data-cel'>{(data.net_sales/1000).toFixed(2)}</articles>
      <articles className='data-cel'>{(data.cogs/1000).toFixed(2)}</articles>
      <articles className='data-cel'>{(data.gross_profit/1000).toFixed(2)}</articles>
      <articles className='data-cel'>{(data.op_expense/1000).toFixed(2)}</articles>
      <articles className='data-cel'>{(data.op_income/1000).toFixed(2)}</articles>
    </section>
  )
}

export default TableColumn
