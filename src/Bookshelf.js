import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }

  booksOnShelf = (shelf) => {
    return this.props.books.filter(book => {
      return book.shelf === shelf;
    })
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.booksOnShelf(this.props.value).map((book) => (
              <li key={book.id}>
                <Book book={book} />
              </li>
             ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
