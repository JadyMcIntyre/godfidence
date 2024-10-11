// Import mongoose for creating the schema and model
const mongoose = require('mongoose');

/**
 * AppGallery Schema representing the structure of an app gallery item in MongoDB.
 * 
 * @typedef {Object} AppGalleryItem
 * @property {number} id - The ID of the app gallery item.
 * @property {string} name - The name of the app gallery item.
 */
const appGallerySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        description: 'The ID of the app gallery item'
    },
    name: {
        type: String,
        required: true,
        description: 'The name of the app gallery item'
    }
});

/**
 * AppGalleryItem Model representing an app gallery item document in MongoDB.
 * This model can be used to interact with the appGallery collection.
 * 
 * @type {mongoose.Model<AppGalleryItem>}
 */
const AppGalleryItem = mongoose.model('AppGalleryItem', appGallerySchema);

// Export the AppGalleryItem model to be used in other parts of the application
module.exports = AppGalleryItem;