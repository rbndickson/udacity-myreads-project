import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class SearchResults extends React.Component {
  state = {
    showingBooks: []
  }

  componentWillReceiveProps(props) {
    if (props.query === '') {
      this.setState({ showingBooks: [] });
    } else if (props.query && props.query !== '') {
      this.getQueriedBooks(props.query);
    }
  }

  getQueriedBooks(query) {
    BooksAPI.search(query, 10).then((result) => {
      if (result.hasOwnProperty('error')) {
        this.setState({ showingBooks: [] });
      } else {
        this.setState({ showingBooks: result });
      }
    })
  }

  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {(this.state.showingBooks !== []) && (
            this.state.showingBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} onUpdateBook={this.props.onUpdateBook} />
              </li>
            ))
          )}
        </ol>
      </div>
    )
  }
}

export default SearchResults
