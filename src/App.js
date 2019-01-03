import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import BookCards from './BookCard';
import bookData from './books.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booksA_M: [],
      booksN_Z: []
    }
  }
  componentDidMount = () => {
    bookData.items.sort((a, b) => {
      let textA = a.volumeInfo.title.toLowerCase()
      let textB = b.volumeInfo.title.toLowerCase()
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    this.divideTitles(bookData.items)
  }
  divideTitles = books => {
    let booksA_M = []
    let booksN_Z = []
    for (let i = 0; i < books.length; i++) {
      let firstLetterOfTitle = bookData.items[i].volumeInfo.title.toLowerCase().slice(0, 1)
      if (firstLetterOfTitle.charCodeAt(0) < 109) {
        booksA_M.push(books[i])
      } else {
        booksN_Z.push(books[i])
      }
    }
    this.setState({
      booksA_M,
      booksN_Z
    })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <h1>Books</h1>

          <h2>Titles A-M</h2>
          <BookCards books={this.state.booksA_M} />

          <h2>Titles N-Z</h2>
          <BookCards books={this.state.booksN_Z} />
        
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
