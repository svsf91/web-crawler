const express = require('express');
const utility = require('utility');

var app = express();
app.get('/', function(req, res) {
    const q = req.query.q;
    const md5value = utility.md5(q);
    res.send(md5value);
});
app.listen(3000, function(req, res) {
    console.log('app is running on port 3000');
});
