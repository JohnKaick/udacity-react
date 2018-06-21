import React from 'react';
import Component from './App.component';
import './App.css';

import * as BooksAPI from './BooksAPI';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.onOpenSearch = this.onOpenSearch.bind(this)
    this.onCloseSearch = this.onCloseSearch.bind(this)
    this.state = {
      showSearchPage: false,
      books: null
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((bks) => {
      console.log(bks)
      this.setState({ 
        books: bks || [] 
      })
    })
  }

  onCloseSearch(e) {
    this.setState({ showSearchPage: false })
  }

  onOpenSearch(e) {
    this.setState({ showSearchPage: true })
  }

  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        onCloseSearch={this.onCloseSearch}
        onOpenSearch={this.onOpenSearch}
      />
    );
  }
}

export default App;
