import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  handleOnChange(book, e) {
    if (this.props.onUpdateBook) {
      this.props.onUpdateBook(book, e.target.value);
    }
  }

  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={book.shelf}
              onChange={(e) => this.handleOnChange(book, e)}
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">{ book.author }</div>
      </div>
    )
  }
}

export default Book
