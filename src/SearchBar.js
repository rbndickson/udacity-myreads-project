import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.props.query}
            onChange={(e) => { this.props.onUpdateQuery(e.target.value) }}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar