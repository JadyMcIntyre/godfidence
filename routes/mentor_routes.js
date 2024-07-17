// routes/mentorRoutes.js
const express = require('express');

const router = express.Router();

const getMentorController = require('../controllers/get_mentor_controller');

router.get('/', getMentorController.getAllMentors);
router.get('/:id', getMentorController.getMentorById);

module.exports = router;