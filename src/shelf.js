function shelfBook(book, sciFiShelf) {
  if (book.genre === 'sciFi' && sciFiShelf.length < 3) {
    sciFiShelf.unshift(book);
  }
};


function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      shelf.splice(i, 1)
    }
  }
};


function listTitles(shelf) {
  var titles = '';
  for (var i = 0; i < shelf.length; i++) {
    titles = titles + shelf[i].title + ', ';
  }
  return titles.substring(0, titles.length - 2);
};



function searchShelf(bookShelf, title) {
  var available = null;
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title.includes(title)) {
      return available = true;
  } else {
      available = false;
    }
  }
  return available;
};




module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
