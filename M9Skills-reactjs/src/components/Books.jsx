import React from 'react'
import './Books.css'
import Book from './Book';

function Books() {
  const books = [
    {
      title: "Dagboek van Anne Frank",
      author: "Anne Frank"
    },
    {
      title: "The C++ Programming Language",
      author: "Bjorne Strausrup"
    },
    {
      title: "De Davinci Code",
      author: "Dan Brown"
    },
    {
      title: "Death on the Nile",
      author: "Agatha Christie"
    },
    {
      title: "The Way of Kings",
      author: "Brandon Sanderson"
    },
    {
      title: "Harry Potter en de steen der wijzen",
      author: "JK Rowling"
    },
    {
      title: "Bakbijbel",
      author: "Rutger van den Broek"
    },
  ]
  return (
    <div className='books-wrapper'>
      <ul>
        <Book title={books[0].title} author={books[0].author}/>
        <Book title={books[1].title} author={books[1].author}/>
        <Book title={books[2].title} author={books[2].author}/>
        <Book title={books[3].title} author={books[3].author}/>
        <Book title={books[4].title} author={books[4].author}/>
        <Book title={books[5].title} author={books[5].author}/>
        <Book title={books[6].title} author={books[6].author}/>
      </ul>
    </div>
  )
}

export default Books
