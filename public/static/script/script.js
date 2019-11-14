// Make a request for a user with a given ID
function getBooks() {
    // code
    axios.get('http://localhost:3000/books')
    .then(function (response) {
      // handle success
      console.log(response)
      renderBooks(response.data.books)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

function renderBooks(books) {
    var bookElement = document.getElementById("books")
    bookElement.innerHTML = ""

    for (var i = 0; i < books.length; i++) {
        bookElement.innerHTML += "<input type='checkbox' name='check' value='" + books[i].book + "'>" + books[i].book  + "<br>"
    }
}


function addBook(event) {
    event.preventDefault();
    // code

    var bookName = document.getElementById("book").value
    
    axios.post('http://localhost:3000/add/book', {
      bookName: bookName
    }, 
    {
      headers: {
        'Content-Type': 'application/json',
    }
    })
    .then(function (response) {
      // handle success
      if(response.status = 200) {
        getBooks()
      }
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

function selectedBookValue() {
    var selectedBook = document.getElementsByName('check');     
    
    for (i = 0; i < selectedBook.length; i++) { 
        if (selectedBook[i].checked) { 
            var bookName = selectedBook[i].value
            document.getElementById("result").innerHTML = "Du har valt: " + selectedBook[i].value; 
        } 
    }

    deleteBook(bookName)
}

function deleteBook(bookName) {
    // code
    axios.delete('http://localhost:3000/delete/book', {
      headers: {
        'Content-Type': 'application/json',
      }, 
      data: {
          bookName: bookName
      },
    })
    .then(function (response) {
      if(response.status = 200) {
        getBooks()
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

