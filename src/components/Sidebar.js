import React from 'react'
import './styles/Sidebar.css'

const changeClass = (view, type) => {
  return view === type ? "menu-tag active-tag" : "menu-tag"
}

const Sidebar = ({changeView, view}) => {
  return (
    <aside className="Sidebar">
      <div className="menu">
        <h2>Menu</h2>
      </div>
      <div className="menu-nav">
        <button className={changeClass(view, 'profit')} value="profit" onClick={changeView}>Profit And Loss Statement</button>
        <button className={changeClass(view, 'dashboard')} value="dashboard" onClick={changeView}>Dashboard</button>
        <button className={changeClass(view, 'top')} value="top" onClick={changeView}>Top Customers</button>
        <button className={changeClass(view, 'help')} value="help" onClick={changeView}>Help</button>
      </div>
    </aside>
  )
}

export default Sidebar