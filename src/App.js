import React from "react";

import json from './components/data/data.json';
import LineGraph from './components/lineGraph';
import Histogram from './components/histogram';
import Table from './components/table';
import  './App.css';
import { Col, Row } from "react-flexbox-grid";
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    margin: '8px',
    padding: '8px'
  },
  tableHead: {
    backgroundColor: '#f2f2f2',
  },
});


function App() {

  const classes = useStyles();
  
  const [data, setData] = React.useState(null);

  let labels = ['01', '02', '03', '04', '05', '06']
  let histogramData = new Array(7).fill(0)
  let lineChartData = new Array(7).fill(0)


  React.useEffect(() => {
    getData()
  }, []);

  function getData() {
    let customers = json.customers
    let orders = json.orders
    setData({customers, orders})
  }

  if(data){
    data.orders.forEach( (order) => {
        histogramData[new Date(order.created).getDay()] = histogramData[new Date(order.created).getDay()] + 1
        lineChartData[new Date(order.created).getDay()] = lineChartData[new Date(order.created).getDay()] + parseInt(order.price)
    })
  }
  if (data == null) return  <div>Lodaing!!</div>
  else
  return (
    <div className="App">
     <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className={classes.root}>
            <CardHeader
              title="Orders Count"
            />
            <Divider />
            <CardContent>
          <Histogram labels ={labels} data = {histogramData} />
            </CardContent>
          </Card>
          </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className={classes.root}>
            <CardHeader
              title="Orders Total Price"
            />
            <Divider />
            <CardContent>
            <LineGraph labels ={labels} data = {lineChartData} />
            </CardContent>
          </Card>
          </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={12}>
          <Card className={classes.root}>
            <CardHeader
              title="Customers"
            />
            <Divider />
            <CardContent>
          <Table customers={data.customers}/>
            </CardContent>
          </Card>
          </Col>
      </Row>
    </div>
  );
}

export default App;
