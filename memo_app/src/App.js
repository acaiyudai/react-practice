import React, { Component } from 'react';
import { connect } from 'react-redux';
import Memo from './memo/Memo'
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';
import './App.css';

// App component
class App extends Component {
  /*-- field --*/
  td = {
    width:'250px'
  }
  /*-- method --*/
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>RedVelvet</h1>
        <AddForm />
        <hr />
        <table><tbody><tr>
          <td style={this.td}><FindForm /></td>
          <td style={this.td}><DelForm /></td>
        </tr></tbody></table>
        <Memo />
      </div>
    );
  }

}

export default App;
