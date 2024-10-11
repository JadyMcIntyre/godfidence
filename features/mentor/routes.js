// Import Express
const express = require('express');
const router = express.Router();


// Import the mentor controller functions
const { getMentors, createMentor } = require('./controller');

router.get('/mentors', getMentors);


router.post('/mentors', createMentor);

// Export the router module
module.exports = router;