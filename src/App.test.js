import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})


// Main page
// ---------
//
// [✅] Can remove a book by choosing 'none' for the shelf
// [✅] Can change a books shelf using the dropdown
// [✅] The dropdown shows the book's current shelf
//
// [✅] Can open the search page
//
// Search page
// -----------
//
// [✅] Can search for a book using one word ('Robotics')
// [✅] Can search for a book using multiple words ('Web Development')
// [✅] Search results update in real time
// [✅] Search results update when deleting the query and reflect the
//      text in the search box
// [✅] Can add a book from search page
// [✅] Can remove a book by selecting 'none'
// [✅] Can change a book's shelf using the dropdown
//
// [✅] Can navigate back to the main page using the search bar button
//
// Navigation
// ----------
//
// [✅] Can naviagte between the pages using forward and back
// [✅] Can navigate using the URLs '/' and '/search'
