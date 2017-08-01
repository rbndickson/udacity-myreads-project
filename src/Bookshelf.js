import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    shelfValue: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  booksOnShelf = (shelf) => {
    return this.props.books.filter(book => {
      return book.shelf === shelf;
    })
  }

  render() {
    const { onUpdateBook, title, shelfValue } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.booksOnShelf(shelfValue).map((book) => (
              <li key={book.id}>
                <Book book={book} onUpdateBook={onUpdateBook} />
              </li>
             ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
