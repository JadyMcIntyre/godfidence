// routes/mentorRoutes.js
const express = require('express');

const router = express.Router();

const appController = require('../controllers/app_gallery');

router.get('/', appController.getAllAppGalleryItems);
router.get('/:id', appController.getAppGalleryItemById);

module.exports = router;