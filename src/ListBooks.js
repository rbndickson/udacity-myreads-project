import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
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
