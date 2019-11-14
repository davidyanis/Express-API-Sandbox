const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const path = require("path");

app.use(bodyParser.json());

app.use(express.static('public'))


app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))

let books = [
    {
        book: 'Den slitna',
        id: 1,
    },
    {
        book: 'Den glada',
        id: 2,
    },
]


app.get('/books', function (req, res) {
    res.send({ books })
})

app.post('/add/book', function (req, res) {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();

    books.push(
        {
            book: req.body.bookName,
            id: uniqid,
        }
    )
    res.send({ books })
})

app.delete('/delete/book', function (req, res) {
    for (var i = books.length - 1; i >= 0; i--) {
        if (req.body.bookName == books[i].book) {
            books.splice(i, 1)
        }
    }

    res.send({ books })
})

app.listen(port, () => console.log('Exempel app listening on port ${port}!'));
