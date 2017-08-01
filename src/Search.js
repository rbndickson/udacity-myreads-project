import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'


class Search extends React.Component {
  static propTypes = {
    userBooks: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    queriedBooks: []
  }

  updateSerachPage = (query) => {
    this.updateQuery(query);
    this.updateQueriedBooks(query);
  };

  updateQuery(query) {
    this.setState({ query: query });
  }

  updateQueriedBooks(query) {
    if (query === '') {
      this.setState({
        queriedBooks: []
      });
    } else {
      BooksAPI.search(query, 10).then((result) => {
        if (result.hasOwnProperty('error')) {
          this.setState({
            queriedBooks: []
          });
        } else {
          this.setState({
            queriedBooks: result
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar
          query={this.state.query}
          onUpdateSearchPage={this.updateSerachPage}
        />
        <SearchResults
          query={this.state.query}
          userBooks={this.props.userBooks}
          queriedBooks={this.state.queriedBooks}
          onUpdateBook={this.props.onUpdateBook}
        />
      </div>
    )
  }
}

export default Search
