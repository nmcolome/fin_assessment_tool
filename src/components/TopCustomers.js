import React, { Component } from 'react'
import './styles/TopCustomers.css'
import SimpleScatterChart from './SimpleScatterChart'
import TinyBarChart from './TinyBarChart'
import PositiveNegativeBarChart from './PositiveNegativeBarChart'

class TopCustomers extends Component {
  constructor() {
    super()
    this.state = {
      customers: [],
      chartData: [],
      client: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  componentDidMount() {
    fetch('https://warm-beyond-47329.herokuapp.com/api/v1/top_customers')
    .then(response => {
      return response.json()
    })
    .then(data => {
      const chartData = data.map(clientObj => {
        const investment = +((clientObj.discounts_17 - clientObj.discounts_16)/clientObj.discounts_16 * 100).toFixed(2)
        const growth = +((clientObj.net_sales_17 - clientObj.net_sales_16)/clientObj.net_sales_16 * 100).toFixed(2)
        return { client: clientObj.client, investmentGrowth: investment, salesGrowth: growth }
      })
      this.setState({
        customers: data,
        chartData,
        client: data[0].client
      })
    })
    .catch(error => { console.error(error) })
  }

  handleOnChange(event) {
    this.setState({
      client: event.target.value
    })
  }

  render() {
    const options = this.state.customers.map(client => {
      return <option value={client.client}>{client.client}</option>
    })

    const clients = this.state.customers.map(client => {
      return client.client
    })

    const index = clients.indexOf(this.state.client)

    if (this.state.client === '') {
      return <div></div>
    }
    return (
      <div className='top'>
        <h1>Top 10 Customers</h1>
        <div className='first_row_view'>
          <div className='top-cust-row'>
            <select name="client" onChange={this.handleOnChange}>
              {options}
            </select>
            <section className='top-data-table'>
              <section className='top-data-column'>
                <articles className='top-data-row hide'>I</articles>
                <articles className='top-data-row'>Gross Sales</articles>
                <articles className='top-data-row'>Investment</articles>
                <articles className='top-data-row'>Net Sales</articles>
              </section>
              <section className='top-data-column'>
                <articles className='top-data-row'>YTD 16</articles>
                <articles className='top-data-row'>{this.state.customers[index].sales_16}</articles>
                <articles className='top-data-row'>{this.state.customers[index].discounts_16}</articles>
                <articles className='top-data-row'>{this.state.customers[index].net_sales_16}</articles>
              </section>
              <section className='top-data-column'>
                <articles className='top-data-row'>YTD 17</articles>
                <articles className='top-data-row'>{this.state.customers[index].sales_17}</articles>
                <articles className='top-data-row'>{this.state.customers[index].discounts_17}</articles>
                <articles className='top-data-row'>{this.state.customers[index].net_sales_17}</articles>
              </section>
            </section>
          </div>
          <TinyBarChart clientData={this.state.customers} />
        </div>
        <PositiveNegativeBarChart clientData={this.state.chartData} />
      </div>
    )
  }
}

export default TopCustomers