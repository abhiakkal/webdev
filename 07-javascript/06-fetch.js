const url = "https://anapioficeandfire.com/api/books/";
const app = document.querySelector("#books");

// Helper to build and insert a book card
const renderBook = (book) => {
  const wrapper = document.createElement("section");
  wrapper.classList.add("book-card");

  const title = document.createElement("h2");
  const author = document.createElement("p");
  const year = document.createElement("p");
  const pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = `Author: ${book.authors[0]}`;
  year.textContent = `Published: ${book.released.slice(0, 4)}`;
  pages.textContent = `Pages: ${book.numberOfPages}`;

  wrapper.append(title, author, year, pages);
  app.appendChild(wrapper);
};

const fetchData = (endpoint) => {
  fetch(endpoint)
    .then((res) => res.json())
    .then((books) => {
      books.forEach((b) => renderBook(b));
    })
    .catch(() => {
      const errorMsg = document.createElement("p");
      errorMsg.textContent =
        "Something went wrong while loading the books. Try again later.";
      app.appendChild(errorMsg);
    })
    .finally(() => {
      const loader = document.querySelector("#loading");
      if (loader) loader.remove();
    });
};

fetchData(url);
