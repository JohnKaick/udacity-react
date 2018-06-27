import React from 'react';
import Component from './App.component';
import './App.css';

import * as BooksAPI from './BooksAPI';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.onOpenSearch = this.onOpenSearch.bind(this)
    this.onCloseSearch = this.onCloseSearch.bind(this)
    this.onChangeShelf = this.onChangeShelf.bind(this)
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

  onChangeShelf(e, book) {
    const shelf = e.target.value
    BooksAPI.update(book, shelf).then(() => {
      return BooksAPI.getAll()
    }).then((bks) => {
      this.setState({ 
        books: bks || [] 
      })
    })
  }

  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        onCloseSearch={this.onCloseSearch}
        onOpenSearch={this.onOpenSearch}
        onChangeShelf={this.onChangeShelf}
      />
    );
  }
}

export default App;
