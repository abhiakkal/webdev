
$(document).ready(function () {
  const apiURL = "https://anapioficeandfire.com/api/books/";
  const $container = $("#books");
  const $spinner = $("#loading");

  // Create a single book card
  function renderBook(book) {
    const $card = $("<div>").addClass("book-item");

    const $title = $("<h4>").text(book.name);
    const $author = $("<p>").text(`Author: ${book.authors[0]}`);
    const $year = $("<p>").text(`Published: ${book.released.slice(0, 4)}`);
    const $pages = $("<p>").text(`${book.numberOfPages} pages`);

    // Basic layout styling
    $card.css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    });

    $card.append($title, $author, $year, $pages);
    $container.append($card);
  }

  // Load all books
  $.ajax({
    url: apiURL,
    method: "GET",
  })
    .done(function (books) {
      books.forEach((book) => renderBook(book));
    })
    .fail(function () {
      const $error = $("<p>")
        .text("Unable to load book information.")
        .css("color", "red");
      $container.append($error);
    })
    .always(function () {
      $spinner.remove();
    });
});
