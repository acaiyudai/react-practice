import React, { Component } from 'react';
import './App.css';

/*-----------------------------------------
オリジナルの属性'onCheck'を使うための処理.
1 onCheck時に実行される関数'doCheck'を作る.
2 入力文字数の最大値'10'と'onCheck'属性を, Messageインスタンスに渡す.
3 Messageクラス内で, onChange時に実行される関数'doChange'を作る.
  doChangeは文字が入力されるたびに実行される.
  入力された文字数と最大値を比較する.
  最大値より大きければ, onCheck属性の関数'doCheck'を実行する.

-------------------------------------------*/

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
    this.doCheck = this.doCheck.bind(this);
  }

  doCheck(event){
    alert(event.target.value + 'は長すぎます(最大10文字).')
  }

  render(){
    return (
      <div>
        <h1>React</h1>
        <h2>{this.state.message}</h2>
        <Message maxlength='10' onCheck={this.doCheck} />
      </div>
    );
  }

}

class Message extends Component {
  /*-- field --*/
  inputStyle = {
    fontSize:'12pt',
    padding:'5px'
  }

  /*-- method --*/
  constructor(props){
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(e){
    if (e.target.value.length > this.props.maxlength){
      this.props.onCheck(e);
      //指定した位置から, 指定した文字数分の文字列を抜き出して返す関数'substr'
      e.target.value = e.target.value.substr(0, this.props.maxlength);
    }
  }

  render(){
    return (
      <input type='text' style={this.inputStyle} onChange={this.doChange} />
    );
  }
}

export default App;
