import React, { Component } from 'react';
import './App.css';
/*-- 追記 --*/
import { connect } from 'react-redux';

/*---------------------------------------------------------------
コンポーネント間で共通の変数格納庫(ストア)を利用できるライブラリ'Redux'.
App.jsだけでなく、index.js側も編集している.
index.js側でReduxの設定を行っている.
-----------------------------------------------------------------*/

// ステートのマッピング
function mappingState(state){
  return state;
}

// Appコンポーネント
class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}
// ストアのコネクト
App = connect()(App);

// Messageコンポーネント
class Message extends Component {
  style = {
    fontSize:'20pt',
    padding:'20px 5px'
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <p style={this.style}>
        {this.props.message} : {this.props.counter}
      </p>
    );
  }
}
// ストアのコネクト
Message = connect(mappingState)(Message);

// Buttonコンポーネント
class Button extends Component {
  style = {
    fontSize:'16pt',
    padding:'5px 10px'
  }

  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  // ボタンクリックでディスパッチを実行
  doAction(e){
    if (e.shiftKey){
      this.props.dispatch({type:'DECREMENT'});
    } else {
      this.props.dispatch({type:'INCREMENT'});
    }
  }

  render(){
    return (
      <button style={this.style} onClick={this.doAction}>
        Click
      </button>
    );
  }
}
// ストアのコネクト
Button = connect()(Button);


/*-- 追記(ここまで) --*/
export default App;
