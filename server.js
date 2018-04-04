const file = require('fs');
const path = require('path');

const express = require('express');
const utility = require('utility');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use('/api/hash', require('./hash.js'));
app.use('/api/crawler', require('./crawler.js'));

const port = 3000;
app.listen(port, function(req, res) {
    console.log(`listening to port ${port}`);
});

module.exports = app;