import React, { Component } from 'react';
import './App.css';

/*---------------------------------------------------------------
コンポーネント間で共通の変数'SampleContext'を利用できる機能'Context'.
指定した場所にのみ変更を加えられる'Context.Provider'.
今回はContextを利用したテーマ作成.
-----------------------------------------------------------------*/

let theme = {
  light:{
    backgroundColor:'#eef',
    color:'#006',
    padding:'10px'
  },
  dark:{
    backgroundColor:'#006',
    color:'#eef',
    padding:'10px'
  }
};

const ThemeContext = React.createContext(theme.dark);

class App extends Component {
  /*-- field --*/
  static contextType = ThemeContext;
  /*-- method --*/
  render(){
    return (
      <div>
        <Title value='Context page' />
        <Message value='this is Context sample.' />
        <Message value='※これはテーマのサンプルです.' />
      </div>
    );
  }
}

class Title extends Component {
  /*-- field --*/
  static contextType = ThemeContext;
  /*-- method --*/
  render(){
    return (
      <div>
        <h2 style={this.context}>{this.props.value}</h2>
      </div>
    );
  }
}
class Message extends Component {
  /*-- field --*/
  static contextType = ThemeContext;
  /*-- method --*/
  render(){
    return (
      <div>
        <p style={this.context}>{this.props.value}</p>
      </div>
    );
  }
}

export default App;
