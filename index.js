function fetchBooks() {
  // Return the fetch call to make it accessible outside the function
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      // Once data is fetched, render the books
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Call fetchBooks when the DOM content is loaded
});
