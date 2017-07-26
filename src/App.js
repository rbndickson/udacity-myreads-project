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
    if (shelf === 'none') {
      this.removeBook(book)
    } else if (!this.state.books.includes(book)) {
      this.addBook(book, shelf)
    } else {
      this.changeShelf(book, shelf)
    }

    BooksAPI.update(book, shelf)
  }

  changeShelf(book, shelf) {
    this.setState(state => ({
      books: state.books.map((b) => {
        if (b.id === book.id) { b.shelf = shelf; }
        return b;
      })
    }))
  }

  addBook(book, shelf) {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.concat([ book ])
    }))
  }

  removeBook(book) {
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search
            userBooks={this.state.books}
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
