var express = require('express');
var router = express.Router();
console.log("hhhhh");
const indexController = require('../controllers/indexController')
console.log("ddddd");

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
