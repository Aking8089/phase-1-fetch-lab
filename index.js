function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
return fetch("https://anapioficeandfire.com/api/books")

}

function renderBooks(books) {}
