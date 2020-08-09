var express = require('express');
var router = express.Router();
const ayudaycontactoController = require('../controllers/ayudaycontactoController')

/* GET ayudayconacto page. */
router.get('/', ayudaycontactoController.principal);

module.exports = router;
