// Import mongoose for creating the schema and model
const mongoose = require('mongoose');

/**
 * Mentor Schema representing the structure of a mentor document in MongoDB.
 * 
 * @typedef {Object} Mentor
 * @property {number} id - The ID of the mentor.
 * @property {string} name - The name of the mentor.
 * @property {string} expertise - The area of expertise of the mentor.
 * @property {string} description - A brief description of the mentor's background.
 */
const mentorschema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        description: 'The ID of the mentor'
    },
    name: {
        type: String,
        required: true,
        description: 'The name of the mentor'
    },
    expertise: {
        type: String,
        required: true,
        description: 'The area of expertise of the mentor'
    },
    description: {
        type: String,
        required: true,
        description: "A brief description of the mentor's background"
    }
});

/**
 * Mentor Model representing a mentor document in MongoDB.
 * This model can be used to interact with the mentors collection.
 * 
 * @type {mongoose.Model<Mentor>}
 */
const Mentor = mongoose.model('Mentor', mentorschema);

// Export the Mentor model to be used in other parts of the application
module.exports = Mentor;