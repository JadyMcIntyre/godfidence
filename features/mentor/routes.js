// Import Express
const express = require('express');

// Create a new router instance
const router = express.Router();

// Import the mentor controller functions
const getMentorController = require('./controller');

/**
 * Route to get all mentors.
 * 
 * @name GET /
 * @function
 * @memberof module:routes/mentorRoutes
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.get('/', getMentorController.getAllMentors);

/**
 * Route to get a specific mentor by ID.
 * 
 * @name GET /:id
 * @function
 * @memberof module:routes/mentorRoutes
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.get('/:id', getMentorController.getMentorById);

// Export the router module
module.exports = router;