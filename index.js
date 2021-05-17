const { request } = require('express');
var express = require('express')
var app = express()
var port = process.env.PORT || 3000;
const {fs, db} = require('./fire')
const data = require('./data/creds')

const testData = fs.collection('data')
//enables app to consume post requests
app.use(express.json());

app.get('/', (req, res) =>{
    db
    .get()
    .then(data=>res.json(data.data()))
})
app.post('/add_shift', (req, res)=>{
    testData
    .do
})
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
   });