# Financial Assessment Tool

## Intro

This Web App is a tool to evaluate customer/product contribution, profitability, trends and investments based on financial kpis and filtered based on product category/ customers and location (if applicable).

This App serves as the fronted for the [Financial Assessment Tool API](https://github.com/nmcolome/fin_assessment_tool_api) project.

## Setup

Clone the repo in your terminal:
```
git clone https://github.com/nmcolome/fin_assessment_tool.git
```
Navigate into the project: `cd fin_assessment_tool`

To install the dependencies:
```
npm install
```
To fire up a development server:
```
npm start
```
To build the static files:
```
npm run build
```

## Features
### Profit And Loss Statement
Presents the Profit and Loss statement per customer based on four filters: region, client cluster, product and category.

It facilitates the review of monthly results, trend analysis and the evaluation of the main key financial indicators to identify a customers performance, anomalies in the reported results and risks/opportunities per client and cluster.

### Dashboard
Presents the main indicators of contribution and growth by Client Cluster and Category/Product.

This information allows to identify the clients with a greater weight or impact in the results by region (by Net Sales) and at the same time to identify their growth and the investment on the client. It facilitates the identification of risks / opportunities, which can then be evaluated in greater detail in the Profit And Loss Statement.

### Top Customers
Top 10 Customers based on Net Sales and possibility to filter by: region and product.

This classification allows the quick identification of clients with the greatest impact (according to filters) and allows to evaluate the client's performance based on the investment that is being received (Investment% vs Growth%); to facilitate decision taking based on the presented results.

## Stack
React and Recharts

## Author
[Natalia Colomé](https://github.com/nmcolome)