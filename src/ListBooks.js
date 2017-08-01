import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    const { books, onUpdateBook } = this.props;
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Bookshelf
          books={books}
          onUpdateBook={onUpdateBook}
          title="Currently Reading"
          shelfValue="currentlyReading" />
        <Bookshelf
          books={books}
          onUpdateBook={onUpdateBook}
          title="Want to Read"
          shelfValue="wantToRead" />
        <Bookshelf
          books={books}
          onUpdateBook={onUpdateBook}
          title="Read"
          shelfValue="read" />
        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
