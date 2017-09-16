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

      </div>
    )
  }
}

export default ProfitAndLoss