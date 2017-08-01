import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired
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
                <Book book={book} onUpdateBook={this.props.onUpdateBook} />
              </li>
             ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
