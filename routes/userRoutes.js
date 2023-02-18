var express = require('express');
var router = express.Router();
const equipmentController = require('../controllers/equipmentController')

/* GET users listing. */
router.get('/getUsers', equipmentController.getUsers);

module.exports = router;
