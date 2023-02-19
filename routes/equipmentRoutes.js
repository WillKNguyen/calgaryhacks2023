var express = require('express');
var router = express.Router();
const equipmentController= require('../controllers/equipmentController');

// Equipment Test
router.get('/', function(req, res, next) {
  res.send("return equipment stuff");
});

// Get status for all equipment
router.get('/info/all', equipmentController.getInfoAll);

// Get equipment status by eId
router.get('/info/:eId', equipmentController.getInfoById);

// Change equipment availability by eId
router.put('/update_availability/:eId/:availability', equipmentController.updateAvailability);

// Change equipment under_maintenance status by eId
router.put('/update_maintenance/:eId/:underMaintenance', equipmentController.updateUnderMaintenance);

router.get('/getMap', equipmentController.getMap)

module.exports = router;
