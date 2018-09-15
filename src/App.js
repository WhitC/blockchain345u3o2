import React, { Component } from 'react';
import Block from './Block';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main flex column center">
          <div className="inner-container flex center">
            <Block />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
