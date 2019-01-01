import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import BookCards from './BookCard';
import bookData from './books.json'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }
  componentDidMount = () => {
    bookData.items.sort((a, b) => {
      let textA = a.volumeInfo.title.toLowerCase()
      let textB = b.volumeInfo.title.toLowerCase()
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    this.setState({
      books: bookData.items
    })
  }
  // componentDidUpdate = () => {
  //   console.log('STATE: ', this.state)
  // }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <h1>Books</h1>

          <h2>Titles A-M</h2>
          <BookCards books={this.state.books} />

          <h2>Titles N-Z</h2>
          <BookCards books={this.state.books} />
        
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
