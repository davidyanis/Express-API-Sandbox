const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))

let nrOfItems = 0

app.get('/api', function (err, res, req) {
    res.send({ counter: nrOfItems++})
})
app.listen(port, () => console.log('Exempel app listening on port ${port}!'));
