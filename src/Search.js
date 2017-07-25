import React from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

class Search extends React.Component {
  state = {
    query: '',
  }

  updateQuery = (query) => {
    this.setState({ query: query });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar
          query={this.state.query}
          onUpdateQuery={this.updateQuery}
        />
        <SearchResults
          query={this.state.query}
          onUpdateBook={this.props.onUpdateBook}
        />
      </div>
    )
  }
}

export default Search
