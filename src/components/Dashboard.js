import React, { Component } from 'react'
import './styles/Dashboard.css'
import FirstColumn from './FirstColumn'
import CategoryBlock from './CategoryBlock'
import ClusterColumn from './ClusterColumn'
import {getKey} from '../helper'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      indicators: [],
      region: 'All',
      global_indicators: []
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.fetchStuff = this.fetchStuff.bind(this)
  }

  path(string) {
    if(string === 'All') {
      return 'http://localhost:3000/api/v1/dashboard'
    } else {
      return `http://localhost:3000/api/v1/dashboard?region=${string}`
    }
  }

  fetchStuff(path) {
    fetch(path)
    .then(response => {
      return response.json()
    })
    .then(data => {
      const clusters_obj = data.reduce((obj, d) => {
        const {clusters, products, categories, net_sales_curr_year, segment_contribution, net_sales_prev_year, discounts_17} = d
        if(!obj[clusters]) {
          obj[clusters] = []
        }
        obj[clusters].push({categories, products, net_sales_curr_year, segment_contribution, net_sales_prev_year, discounts_17})
        return obj
      }, {})

      const region_obj = data.reduce((obj, d) => {
        const {clusters, products, categories, net_sales_curr_year, segment_contribution, net_sales_prev_year, discounts_17} = d
        if(!obj[categories]) {
          obj[categories] = []
        }
        obj[categories].push({products, net_sales_curr_year, segment_contribution, net_sales_prev_year, discounts_17})
        return obj
      }, {})

      this.setState({
        indicators: clusters_obj,
        global_indicators: region_obj
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  componentDidMount() {
    this.fetchStuff('http://localhost:3000/api/v1/dashboard')
  }

  handleOnChange(event) {
    const path = this.path(event.target.value)
    this.fetchStuff(path)
    this.setState({
      region: event.target.value
    })
  }

  render() {
    const cluster_columns = Object.keys(this.state.indicators).map(cluster => {
      return (
        <div className="grid-clusters">
          <div className="grid-item">{cluster}</div>
          <ClusterColumn key={getKey()} clusterData={this.state.indicators[cluster]}/>
        </div>
      )
    })
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        Select Region: <select name="region" onChange={this.handleOnChange}>
          <option value="All">All</option>
          <option value="Region1">Region1</option>
          <option value="Region2">Region2</option>
          <option value="Region3">Region3</option>
          <option value="Region4">Region4</option>
          <option value="Region5">Region5</option>
          <option value="Region6">Region6</option>
        </select>
        <div className="grid-container">
          <div className="grid-header">
            <div className="space"></div>
            <div className="vertical-header grid-item">All</div>
            <div className="vertical-header grid-item">Category1</div>
            <div className="vertical-header grid-item">Product1</div>
            <div className="vertical-header grid-item">Product3</div>
            <div className="vertical-header grid-item">Category2</div>
            <div className="vertical-header grid-item">Product2</div>
            <div className="vertical-header grid-item">Category3</div>
            <div className="vertical-header grid-item">Product4</div>
            <div className="vertical-header grid-item">Product5</div>
          </div>
          <div className="grid-one">
            <div className="grid-item">{this.state.region}</div>
            <FirstColumn firstColData={this.state.global_indicators}/>
          </div>
          <div className="grid-column">
            {cluster_columns}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard