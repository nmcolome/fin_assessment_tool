import React, { Component } from 'react'
import './styles/TopCustomers.css'

class TopCustomers extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/top_customers')
    .then(response => {
      return response.json()
    })
    .then(data => {
      debugger
    })
    .catch(error => { console.error(error) })
  }

  render() {
    return (
      <div className='top'>
        <h1>Top 10 Customers</h1>
      </div>
    )
  }
}

export default TopCustomers