const express = require('express');
const request = require('superagent');
const cheerio = require('cheerio');

const router = express.Router();

router.get('/', function (req, res) {
    var items = [];
    request.get('https://cnodejs.org/')
        .then(function(success, failure) {
            if(failure) {
                res.sendStatus(400).send(failure);
            }
            const $ = cheerio.load(success.text);
            $('#topic_list .topic_title').each(function(index, element) {
                const $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });
            console.log(items);
        })
        .then(function (success, failure) {
            res.send(items);
        });
});

module.exports = router;