var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>New Response With User http://localhost:9000/users</h1>');
});

module.exports = router;
