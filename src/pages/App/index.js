import React, { Component } from 'react';
import './index.css';
import Router from '../../router/router';
import store from '../../actions';

class App extends Component {
  constructor(props){
    super(props);
    store.dispatch({
      type:"setData",
      key:"appId",
      value:"wxeb2c5385d297112c"
    })
  }
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;