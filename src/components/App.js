import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      view: ''
    }
    this.changeView = this.changeView.bind(this)
  }

  // displayView(view) {
  //   switch(view) {
  //     case 'profit': 
  //       return <ProfitAndLoss />
  //     case 'dashboard':
  //       return <Dashboard />
  //     case 'top':
  //       return <TopCustomers />
  //     case 'help':
  //       return <Help />
  //     default:
  //       return <ProfitAndLoss />
  //   }
  // }

  changeView(text) {
    this.setState({
      view: text
    })
  }

  render() {
    // const view = this.displayView(this.state.view)

    return (
      <div className="App">
        {/* <Sidebar changeView={this.changeView}/> */}
        {/* {view} */}
      </div>
    );
  }
}

export default App;
