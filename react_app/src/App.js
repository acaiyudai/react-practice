import React, { Component } from 'react';
import './App.css';

class App extends Component {
  /*-- field --*/
  input = '';

  msgStyle = {
    fontSize:'20pt',
    color:'#900',
    margin:'10px 0px',
    padding:'5px'
  }

  /*-- method --*/
  constructor(props){
    super(props);
    this.state = {
      message:'type your name.'
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event){
    this.input = event.target.value;
  }

  doSubmit(event){
    this.setState({
      message:'Hello, ' + this.input + '!'
    });
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <h1>React</h1>
        <Message title='Children!'>
          これはコンポーネント内のコンテンツです.
          マルでテキストを分割し、リストにして表示します.
          改行は必要ありません.
        </Message>
      </div>
    );
  }

}

class Message extends Component {
  /*-- field --*/
  liStyle = {
    fontSize:'16pt',
    color:'#06',
    margin:'0px',
    padding:'0px'
  }
  /*-- method --*/
  render(){
    let content = this.props.children;
    let arr = content.split('.');
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i].trim() != ''){
        arr2.push(arr[i]);
      }
    }
    let list = arr2.map((value, key)=>(
      <li style={this.liStyle} key={key}>{value}.</li>
    ));

    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol>{list}</ol>
      </div>
    );
  }
}



export default App;
