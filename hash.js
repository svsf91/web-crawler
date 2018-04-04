const express = require('express');
const utility = require('utility');

const router = express.Router();

router.get('/', function(req, res) {
    const q = req.query.q;
    const md5value = utility.md5(q);
    res.send(md5value);
});

module.exports = router;
