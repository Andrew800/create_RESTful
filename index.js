var express = require("express");
const cors = require('cors');
const csv = require('@fast-csv/parse');

var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/data", cors(), (req, res, next) => {
    let arr = []
    csv.parseFile('oscar_age_male.csv')
    .on('data', row => arr.push(row))
    .on('end', () => res.json(arr))
});