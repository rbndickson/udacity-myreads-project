import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchResults extends React.Component {
  static propTypes = {
    queriedBooks: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

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
    const { queriedBooks, onUpdateBook } = this.props;
    
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {(queriedBooks !== []) && (
            queriedBooks.map((book) => (
              <li key={book.id}>
                <Book
                  book={this.updateToCorrectShelf(book)} onUpdateBook={onUpdateBook}
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
