// routes/mentorRoutes.js
const express = require('express');

const router = express.Router();

const appController = require('../controllers/app');

router.get('/', appController.getAllApps);
router.get('/:id', appController.getAppById);

module.exports = router;