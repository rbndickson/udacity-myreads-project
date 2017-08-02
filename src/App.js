import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // this.setState({ books: books }) shorthand:
      this.setState({ books });
    });
  }

  stateContainsBook(bookID) {
    let bookIndex = this.state.books.findIndex((book) => {
      return bookID === book.id;
    });

    return bookIndex !== -1;
  }

  updateBook(book, shelf) {
    if (shelf === 'none') {
      this.removeBook(book.id);
    } else if (!this.stateContainsBook(book.id)) {
      this.addBook(book, shelf);
    } else {
      this.changeShelf(book.id, shelf);
    }

    BooksAPI.update(book, shelf);
  }

  changeShelf(bookID, shelf) {
    this.setState(state => ({
      books: state.books.map((book) => {
        if (book.id === bookID) { book.shelf = shelf; }
        return book;
      })
    }));
  }

  addBook(book, shelf) {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.concat([ book ])
    }));
  }

  removeBook(bookID) {
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== bookID)
    }));
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search
            userBooks={books}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
            }}
          />
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks
            books={books}
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
