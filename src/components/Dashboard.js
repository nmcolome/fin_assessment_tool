import React, { Component } from 'react'
import './styles/Dashboard.css'
// import DataCell from './DataCell'
import CategoryBlock from './CategoryBlock'
import {getKey} from '../helper'

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
    // Promise.all
    fetch('http://localhost:3000/api/v1/dashboard_by_product')
    .then(response => {
      return response.json()
    })
    .then(data => {
      const categories_obj = data.reduce((obj, d) => {
        const {products, categories, net_sales_curr_year, segment_contribution, net_sales_growth, discount_percent} = d
        if(!obj[categories]) {
          obj[categories] = []
        }
        obj[categories].push({products, net_sales_curr_year, segment_contribution, net_sales_growth, discount_percent})
        return obj
      }, {})
      this.setState({
        indicators: categories_obj
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
    const category_blocks = Object.keys(this.state.indicators).map(cat => {
      return <CategoryBlock key={getKey()} catData={this.state.indicators[cat]} name={cat}/>
    })
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
        <div className="grid-container">
          <div>
            <div className="grid-item">All</div>
            <div className="vertical-header grid-item">Category1</div>
            <div className="vertical-header grid-item">Product1</div>
            <div className="vertical-header grid-item">Product3</div>
            <div className="vertical-header grid-item">Category2</div>
            <div className="vertical-header grid-item">Product2</div>
            <div className="vertical-header grid-item">Category3</div>
            <div className="vertical-header grid-item">Product4</div>
            <div className="vertical-header grid-item">Product5</div>
          </div>
          <div>
            <div className="grid-item">{this.state.region}</div>
            {category_blocks}
          </div>
          <div>
            <div className="grid-item">ClientCluster1</div>
          </div>
          {/* <div className="grid-item">ClientCluster2</div>
          <div className="grid-item">ClientCluster3</div>
          <div className="grid-item">ClientCluster4</div>
          <div className="grid-item">ClientCluster5</div> */}
        </div>
      </div>
    )
  }
}

export default Dashboard