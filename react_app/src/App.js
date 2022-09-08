import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Rect from './Rect';

class App extends Component {
  data = [
    'This is list sample.',
    'これはリストのサンプルです.',
    '配列をリストに変換します.'
  ];

  msgStyle = {
    fontSize:'20px',
    color:'#900',
    margin:'20px 0px',
    padding:'5px'
  }

  constructor(props){
    super(props);
    this.state = {
      list:this.data
    };
  }

  render(){
    return (
    <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show list.</h2>
      <List title='サンプルリスト' data={this.data} />
    </div>
    );
  }
}

class List extends Component {
  number = 1;

  titleStyle = {
    fontSize:'20pt',
    fontWeight:'bold',
    color:'blue'
  }

  render(){
    let data = this.props.data;
    return (
      <div>
        <p style={this.titleStyle}>{this.props.title}</p>
        <ul>
          {data.map((item) => 
            <Item number={this.number++} value={item} key={this.number} />
          )}

        </ul>
      </div>
    );

  }
}

class Item extends Component {
  li = {
    listStyleType:'square',
    fontSize:'16pt',
    margin:'0px',
    padding:'0px',
  }

  num = {
    fontWeight:'bold',
    color:'red',
  }

  render(){
    return (
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}] </span>
        {this.props.value}
      </li>
    );
  }
}

export default App;
