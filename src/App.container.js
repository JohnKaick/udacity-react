import React from 'react';
import Component from './App.component';
import './App.css';

class App extends React.Component {

  state = {
    showSearchPage: false
  }

  render() {
    return (
          <Component
          {...this.props}
          {...this.state}
      />
    );
  }
}

export default App;
