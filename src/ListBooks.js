import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

const ListBooks = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <Bookshelf books={props.books} onUpdateBook={props.onUpdateBook} title="Currently Reading" value="currentlyReading" />
    <Bookshelf books={props.books} onUpdateBook={props.onUpdateBook} title="Want to Read" value="wantToRead" />
    <Bookshelf books={props.books} onUpdateBook={props.onUpdateBook} title="Read" value="read" />
    <div className="open-search">
      <Link to="/search">
        Add a book
      </Link>
    </div>
  </div>
)

export default ListBooks
