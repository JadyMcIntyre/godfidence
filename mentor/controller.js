// Importing the 'mentors' data from the mentor_model file
const { mentors } = require('./model');

/**
 * Controller function to get a specific mentor by ID.
 * 
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the mentor.
 * @param {Object} res - The response object.
 */
exports.getMentorById = (req, res) => {
    try {
        // Parse the ID from the request parameters as an integer
        const mentorId = parseInt(req.params.id, 10);
        
        // Find the mentor that matches the given ID
        const mentor = mentors.find(m => m.id === mentorId);

        // If the mentor is found, send it as a response with a 200 status code
        if (mentor) {
            res.status(200).send(mentor);
        } else {
            // If the mentor is not found, send a 404 status code with an error message
            res.status(404).send({ message: 'Mentor not found' });
        }
    } catch (e) {
        // Handle any unexpected errors
        res.status(500).send({ message: 'An unexpected error occurred', error: e.message });
    }
};

/**
 * Controller function to get all mentors.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.getAllMentors = (req, res) => {
    try {
        // Send the entire list of mentors with a 200 status code
        res.status(200).send(mentors);
    } catch (e) {
        // Handle any unexpected errors
        res.status(500).send({ message: 'An unexpected error occurred', error: e.message });
    }
};