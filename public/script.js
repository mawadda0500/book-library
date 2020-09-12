const addbook = document.forms["add-book"];
const booklist = document.querySelector(".booklist");
const book = document.querySelectorAll(".book");




     /* removing a book */

booklist.addEventListener('click', function (e) {
  const bookparent = e.target.parentElement;
  if (e.target.className == 'rem')

    booklist.removeChild(bookparent);

});

      /* adding a book */

addbook.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = addbook.querySelector('input[type="text"]').value;

  var bookName = document.createElement('h3');
  const book = document.createElement('div');
  book.appendChild(bookName);
  booklist.appendChild(book);
  bookName.textContent = value;
  book.classList.add('book');

  var readBtn = document.createElement('button');
  readBtn.textContent = 'read';
  book.appendChild(readBtn);
  booklist.appendChild(book);

  var deletBtn = document.createElement('button');
  deletBtn.textContent = ('remove');
  book.appendChild(deletBtn);
  deletBtn.classList.add('rem');
  booklist.appendChild(book);
});
   

   /* hiding books */


const hideCheckbox = document.querySelector("#hide");
const booklib = document.querySelector(".book-lib");

booklib.addEventListener('click', function (e) {
 
  if (e.target.className=='hiding') {
    book.forEach(function (books) {
      books.style.display = 'none';
    });
  }
  else {
    book.forEach(function (books) {
      books.style.display = 'block';
    });

  }
});

     /* seaching for abook */

const booksearch = document.forms['search'].querySelector('input');
booksearch.addEventListener('keyup', function (e) {
  var searchedTitle = e.target.value.toLowerCase();
  Array.from(book).forEach(function (title) {
    var bookTitle = title.firstElementChild.textContent;
    if (bookTitle.toLowerCase().indexOf(searchedTitle) != -1) {
      title.style.display = 'block';
    }
    else {
      title.style.display = 'none';

    }



  });
});
  /* tabbed footer */
const tabs = document.querySelector(".tabbed-content");
const panels = document.querySelectorAll(".pannel");
tabs.addEventListener('click', function (e) {
  if (e.target.tagName == 'LI') {
    const targetpanel = document.querySelector(e.target.dataset.target);
    panels.forEach(function (panel) {
      if (panel == targetpanel) {
        panel.classList.add("active");
        panel.style.margin = "10px;";
      }
      else {
        panel.classList.remove("active");





      }
    });

  }
});


