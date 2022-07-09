var express = require('express');
var router = express.Router();

let db = [];

router.get('/', function(req, res, next) {
    res.json({messages: db});
});

router.post('/', function(req, res, next) {
    let message = req.body.message;
    db.push(message);
    res.sendStatus(200);
});

router.delete('/', function(req, res, next) {
    db.shift();
    res.sendStatus(200);
});

module.exports = router;
