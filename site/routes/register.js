var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController')

/* GET home page. */
router.get('/', registerController.principal);

module.exports = router;
