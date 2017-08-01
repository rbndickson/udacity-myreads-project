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
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Bookshelf books={this.props.books} onUpdateBook={this.props.onUpdateBook} title="Currently Reading" value="currentlyReading" />
        <Bookshelf books={this.props.books} onUpdateBook={this.props.onUpdateBook} title="Want to Read" value="wantToRead" />
        <Bookshelf books={this.props.books} onUpdateBook={this.props.onUpdateBook} title="Read" value="read" />
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
