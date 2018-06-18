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
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((bks) => {
      this.setState({ books: bks || [] })
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
        closeSearch={this.closeSearch}
        openSearch={this.openSearch}
      />
    );
  }
}

export default App;
