import React from 'react'
import './App.css'
import Book from './Book'

class SearchResults extends React.Component {
  userShelf(id) {
    let userShelf = 'none';

    this.props.userBooks.forEach((userBook) => {
      if (userBook.id === id) {
        userShelf = userBook.shelf;
      }
    });

    return userShelf;
  }

  updateToCorrectShelf(book) {
    book.shelf = this.userShelf(book.id);
    return book;
  }

  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {(this.props.queriedBooks !== []) && (
            this.props.queriedBooks.map((book) => (
              <li key={book.id}>
                <Book
                  book={this.updateToCorrectShelf(book)} onUpdateBook={this.props.onUpdateBook}
                />
              </li>
            ))
          )}
        </ol>
      </div>
    )
  }
}

export default SearchResults
