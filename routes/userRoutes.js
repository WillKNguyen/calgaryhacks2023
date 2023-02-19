var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')


/* GET users listing. */
router.post('/getUser', userController.getUser);

router.get('/register', userController.user_create_get);

router.post('/insertNewUser', userController.insertNewUser)

module.exports = router;
