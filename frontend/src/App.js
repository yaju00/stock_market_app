import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import SavedData from './components/saved_data/saveddata.table'
import axios from 'axios';
import  StockTable from './components/stock_table/stocktable';
import Cards from './components/hero_cards/cards';
import Home from './components/home/home';

class App extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return (
      <Router>
        <Navbar />
          <Cards />
          <Home />
          <Route path='/home'><StockTable /></Route>
          <Route path='/view'><SavedData /></Route>
      </Router>
    );
  }
}

export default App;
