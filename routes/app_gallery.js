// Import Express
const express = require('express');

// Create a new router instance
const router = express.Router();

// Import the app gallery controller functions
const getAppGalleryController = require('../controllers/get_app_gallery_controller');

/**
 * Route to get all app gallery items.
 * 
 * @name GET /
 * @function
 * @memberof module:routes/mentorRoutes
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.get('/', getAppGalleryController.getAllAppGalleryItems);

/**
 * Route to get a specific app gallery item by ID.
 * 
 * @name GET /:id
 * @function
 * @memberof module:routes/mentorRoutes
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.get('/:id', getAppGalleryController.getAppGalleryItemById);

// Export the router module
module.exports = router;