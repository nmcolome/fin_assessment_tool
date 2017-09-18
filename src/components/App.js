import React, { Component } from 'react';
import './styles/App.css';
import Sidebar from './Sidebar'
import ProfitAndLoss from './ProfitAndLoss'
import Dashboard from './Dashboard'
import TopCustomers from './TopCustomers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      view: 'top'
    }
    this.changeView = this.changeView.bind(this)
  }

  displayView(view) {
    switch(view) {
      case 'profit': 
        return <ProfitAndLoss />
      case 'dashboard':
        return <Dashboard />
      case 'top':
        return <TopCustomers />
  //     case 'help':
  //       return <Help />
      default:
        return <ProfitAndLoss />
    }
  }

  changeView(event) {
    this.setState({
      view: event.target.value
    })
  }

  render() {
    const view = this.displayView(this.state.view)

    return (
      <div className="App">
        <Sidebar changeView={this.changeView} view={this.state.view}/>
        {view}
      </div>
    );
  }
}

export default App;
