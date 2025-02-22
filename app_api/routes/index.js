const express = require('express');
const router = express.Router();
const { expressjwt: jwt } = require("express-jwt");

const auth = jwt({ 
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"] 
});


// import controllers 
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

// define route for login and register 
router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

// define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)    // GET method routes triplist 
    .post(auth, tripsController.tripsAddTrip); // POST method adds a trip

// GET method routes tripsFindByCode - requires parameter
// PUT method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;