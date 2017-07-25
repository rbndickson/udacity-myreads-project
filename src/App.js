import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: [],
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
          <Search
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
            }}
          />
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
