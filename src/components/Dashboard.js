import React, { Component } from 'react'
import './styles/Dashboard.css'
import DataCell from './DataCell'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      indicators: [],
      region: 'All Regions',
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/dashboard_by_product')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // const indicators = data.map(d => {
      // })
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

  // buildDataCell() {
    // this.state.indicators.map(row => {
    //   debugger
    // })
  // }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <select name="region" onChange={this.handleOnChange}>
          <option value="All Regions">All</option>
          <option value="Region1">Region1</option>
          <option value="Region2">Region2</option>
          <option value="Region3">Region3</option>
          <option value="Region4">Region4</option>
          <option value="Region5">Region5</option>
          <option value="Region6">Region6</option>
        </select>
        <div className="dash-container">
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
            <div className="grid-item">{this.state.region}</div>
            <DataCell />
            <DataCell />
            <div className="grid-item">ClientCluster1</div>
            <div className="grid-item">ClientCluster2</div>
            <div className="grid-item">ClientCluster3</div>
            <div className="grid-item">ClientCluster4</div>
            <div className="grid-item">ClientCluster5</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard