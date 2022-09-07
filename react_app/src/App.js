import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

class App extends Component {
  
  constructor(props){
    super();
    this.title = props.title;
    this.message = props.message;
  }
  render(){
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.message}</p>
        <Rect x='100' y='50' w='150' h='150' c='#6ff9' r='50' />
        <Rect x='150' y='100' w='150' h='150' c='#f6f9' r='75' />
        <Rect x='100' y='150' w='150' h='150' c='#6669' r='25' />
        
      </div>
    );

  }
}

export default App;
