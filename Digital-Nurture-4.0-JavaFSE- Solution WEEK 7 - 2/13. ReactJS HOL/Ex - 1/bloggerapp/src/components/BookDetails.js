import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: 'React Fundamentals', author: 'John Doe' },
    { id: 2, title: 'Advanced JavaScript', author: 'Jane Smith' },
    { id: 3, title: 'CSS Mastery', author: 'Mike Johnson' }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;