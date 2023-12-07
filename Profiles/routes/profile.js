// --
// routes/flight.js
// --

var express = require('express');
var router = express.Router();
var profileController = require('../controllers/profilecontroller');

router.get('/add', profileController.addProfileForm);
router.post('/add', profileController.addProfile);
router.get('/', profileController.listProfiles);
router.get('/single', profileController.getSingleProfile);
router.get('/single/:num1', profileController.getNthProfile);

module.exports = router;
