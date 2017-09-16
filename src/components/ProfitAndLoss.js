import React, { Component } from 'react'
import './styles/ProfitAndLoss.css'
import TableColumn from './TableColumn'

class ProfitAndLoss extends Component {
  constructor() {
    super()
    this.state = {
      measurements: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/profit_and_loss')
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        measurements: data
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    const column_data = this.state.measurements.map(a => {
      return <TableColumn data={a}/>
    })
    return (
      <div className='profit'>
        <section className='data-table'>
        <section className='data-column'>
          <articles className='data-header'>Month</articles>
          <articles className='data-header'>Gross Sales</articles>
          <articles className='data-header'>Discounts</articles>
          <articles className='data-header'>Net Sales</articles>
          <articles className='data-header'>COGS</articles>
          <articles className='data-header'>Gross Profit</articles>
          <articles className='data-header'>Operating Expense</articles>
          <articles className='data-header'>Net Profit</articles>
        </section>
          <section className='data-list'>
            {column_data}
          </section>
        </section>
        <section>

        </section>
      </div>
    )
  }
}

export default ProfitAndLoss