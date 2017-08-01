import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    onUpdateSearchPage: PropTypes.func.isRequired
  }

  render() {
    const { query, onUpdateSearchPage } = this.props;

    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(e) => { onUpdateSearchPage(e.target.value) }}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar
