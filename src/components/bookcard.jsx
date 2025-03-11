// eslint-disable-next-line no-unused-vars
import React from 'react';
import './bookcard.css';

// eslint-disable-next-line react/prop-types
const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <div className="book-info">
        <h3 className="book-title">{name}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-genre">{genre}</p>
      </div>
    </div>
  );
};

export default BookCard;