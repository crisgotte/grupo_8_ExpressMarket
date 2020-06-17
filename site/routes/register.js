var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController')

/* GET home page. */
router.get('/', registerController.principal);
//router.post("/create", upload.any(), registerController.store);


module.exports = router;
