// routes/mentorRoutes.js
const express = require('express');
const { getMentorById, getAllMentors } = require('../controllers/mentor/mentor_controller');

const router = express.Router();

router.get('/', getAllMentors);
router.get('/:id', getMentorById);

module.exports = router;