import React, { Component } from 'react'
import './styles/Dashboard.css'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      indicators: [],
      region: 'All'
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
        <div className="grid-container">
          <div className="grid-item"></div>
          <div className="grid-item">All</div>
          <div className="grid-item">Category1</div>
          <div className="grid-item">Product1</div>
          <div className="grid-item">Product3</div>
          <div className="grid-item">Category2</div>
          <div className="grid-item">Product2</div>
          <div className="grid-item">Category3</div>
          <div className="grid-item">Product4</div>
          <div className="grid-item">Product5</div>
          <div className="grid-item">Client1</div>
          <div className="grid-item data-cell">
            <div className="grid-item">TO</div>
            <div className="grid-item">Contribution</div>
            <div className="grid-item">Growth%</div>
            <div className="grid-item">TMI%</div>
          </div>
            <div className="grid-item data-cell">
            <div className="grid-item">TO</div>
            <div className="grid-item">Contribution</div>
            <div className="grid-item">Growth%</div>
            <div className="grid-item">TMI%</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard