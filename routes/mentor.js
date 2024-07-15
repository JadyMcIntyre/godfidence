// routes/mentorRoutes.js
const express = require('express');

const router = express.Router();

const mentorController = require('../controllers/mentor');

router.get('/', mentorController.getAllMentors);
router.get('/:id', mentorController.getMentorById);

module.exports = router;