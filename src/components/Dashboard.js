import React, { Component } from 'react'
import './styles/Dashboard.css'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      indicators: [],
      region: 'all'
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/dashboard')
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        indicators: data
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  handleOnChange(event) {
    this.setState({
      region: event.target.value
    })
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <select name="region" onChange={this.handleOnChange}>
          <option value="all">All</option>
          <option value="Region1">Region1</option>
          <option value="Region2">Region2</option>
          <option value="Region3">Region3</option>
          <option value="Region4">Region4</option>
          <option value="Region5">Region5</option>
          <option value="Region6">Region6</option>
        </select>
      </div>
    )
  }
}

export default Dashboard