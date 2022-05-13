function createTitle(title) {
  for (var i = 0; i < createTitle.length; i++) {
  return `The ${title}`;
  }
};


function buildMainCharacter(name, age, pronouns) {
  var character = {
    name,
    age,
    pronouns
  }
  return character;
};


function saveReview(bookReviews, reviews) {
    if (reviews.includes(bookReviews)) {
  return bookReviews.length
  } else {
  return reviews.push(bookReviews);
  }
};


function calculatePageCount(bookTitle) {
  return (bookTitle.length * 20);
};


function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return book;
};


function editBook(book) {
  book.pageCount = book.pageCount * .75;
return book;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
