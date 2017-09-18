import React from 'react'
import './styles/Help.css'

const Help = () => {
  return(
    <div className='help'>
      <h1>Instructions And Recommendations</h1>
      <div className='text'>
        <h3>Navigation</h3>
        <p>Click on the desired view to see the information on the right.</p>

        <h3>Profit And Loss Statement</h3>
        <p>Presents the Profit and Loss statement per customer based on four filters: region, client cluster, product and category.</p>
        <p>It facilitates the review of monthly results, trend analysis and the evaluation of the main key financial indicators to identify a customers performance, anomalies in the reported results and risks/opportunities per client and cluster.</p>
        <p>There is also a graph to provide a visual tool to analyze the information.</p>

        <h3>Dashboard</h3>
        <p>Presents the main indicators of contribution and growth by Client Cluster and Category/Product.</p>
        <p>This information allows to identify the clients with a greater weight or impact in the results by region (by Net Sales) and at the same time to identify their growth and the investment on the client. It facilitates the identification of risks / opportunities, which can then be evaluated in greater detail in the Profit And Loss Statement.</p>

        <h3>Top Customers</h3>
        <p>Top 10 Customers based on Net Sales and possibility to filter by: region and product.</p>
        <p>This classification allows the quick identification of clients with the greatest impact (according to filters) and allows to evaluate the client's performance based on the investment that is being received (Investment% vs Growth%); to facilitate decision taking based on the presented results.</p>
      </div>
    </div>
  )
}

export default Help