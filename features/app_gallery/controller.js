// Importing the 'apps' data from the app_gallery_model file
const { apps } = require('./model');

/**
 * Controller function to get a specific app gallery item by ID.
 * 
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the app gallery item.
 * @param {Object} res - The response object.
 */
exports.getAppGalleryItemById = (req, res) => {
    try {
        // Parse the ID from the request parameters as an integer
        const appId = parseInt(req.params.id, 10);
        
        // Find the app that matches the given ID
        const app = apps.find(m => m.id === appId);

        // If the app is found, send it as a response with a 200 status code
        if (app) {
            res.status(200).send(app);
        } else {
            // If the app is not found, send a 404 status code with an error message
            res.status(404).send({ message: 'App not found' });
        }
    } catch (e) {
        // Handle any unexpected errors
        res.status(500).send({ message: 'An unexpected error occurred', error: e.message });
    }
};

/**
 * Controller function to get all app gallery items.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.getAllAppGalleryItems = (req, res) => {
    try {
        // Send the entire list of apps with a 200 status code
        res.status(200).send(apps);
    } catch (e) {
        // Handle any unexpected errors
        res.status(500).send({ message: 'An unexpected error occurred', error: e.message });
    }
};