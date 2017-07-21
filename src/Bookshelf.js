import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
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
              <Book book={book}/>
             ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
