import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // this.setState({ books: books }) shorthand:
      this.setState({ books })
    })
  }


  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(state => ({
        books: state.books.map((b) => {
          if (b.id === book.id) {
            book.shelf = shelf;
            return book;
          } else  {
            return b;
          }
        })
      }))
    })
  }


  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
