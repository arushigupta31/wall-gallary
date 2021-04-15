import React from 'react';
import './App.css';
import axios from 'axios';
import Gallary from './Gallary/gallary';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
        data:[]
    }
  }
  componentDidMount=()=>{
    const url="http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0";
    axios.get(url)
      .then(result => this.setState({
        data: result.data
      }))
      .catch(error=> console.log(error))
  }
  render() {
    return(
      <div>
        <Gallary data={this.state.data}/>
      </div>
    )
  }
}