var express = require('express');
var router = express.Router();
const equipmentController = require('../controllers/equipmentController')

/* GET users listing. */
router.get('/getUsers', function(req, res, next) {
  equipmentController.getUsers;
});

module.exports = router;
