import React from 'react';
import './App.css'

export default function (props) {

  const { onCloseSearch, onOpenSearch, onChangeShelf, onSearch, 
    showSearchPage, books } = props

  return (
    <div className="app">
    {showSearchPage ? (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={onCloseSearch}>Close</a>
          <div className="search-books-input-wrapper">

          <input type="text" placeholder="Search by title or author" onChange={(e) => onSearch(e)}/>

            <div className="bookshelf-books">
                <ol className="books-grid">

                { books && books.length > 0 ? (
                  (books || []).map((b, i) => (
                    <li key={i}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={(e) =>  onChangeShelf(e, b)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{b.title}</div>
                        {(b.authors).map((a, i) => (
                          <div className="book-authors" key={i}>
                            {a}
                          </div>
                        ))}
                      </div>
                    </li>
                  )
                )) : (
                  <h2 className="bookshelf-title">The books not found</h2>
                )}

                </ol>
              </div>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    ) : (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                {(books || []).filter(b => { return b.shelf === 'currentlyReading'}).map((b, i) => (
                    <li key={i}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={(e) =>  onChangeShelf(e, b)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{b.title}</div>
                        {(b.authors).map((a, i) => (
                          <div className="book-authors" key={i}>
                            {a}
                          </div>
                        ))}
                      </div>
                    </li>
                  )
                )}

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  
                {(books || []).filter(b => { return b.shelf === 'wantToRead'}).map((b, i) => (
                    <li key={i}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={(e) =>  onChangeShelf(e, b)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{b.title}</div>
                        {(b.authors).map((a, i) => (
                          <div className="book-authors" key={i}>
                            {a}
                          </div>
                        ))}
                      </div>
                    </li>
                  )
                )}     

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  
                {(books || []).filter(b => { return b.shelf === 'read'}).map((b, i) => (
                    <li key={i}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={(e) =>  onChangeShelf(e, b)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{b.title}</div>
                        {(b.authors).map((a, i) => (
                          <div className="book-authors" key={i}>
                            {a}
                          </div>
                        ))}
                      </div>
                    </li>
                  )
                )}     

                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <a onClick={onOpenSearch}>Add a book</a>
        </div>
      </div>
    )}
  </div>
  )
}