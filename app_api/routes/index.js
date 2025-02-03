const express = require('express');
const router = express.Router();

// import controllers 
const tripsController = require('../controllers/trips');

// define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList);

// GET method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;