// routes/mentorRoutes.js
const express = require('express');

const router = express.Router();

const appGalleryController = require('../controllers/app_gallery');

router.get('/', appGalleryController.getAllAppGalleryItems);
router.get('/:id', appGalleryController.getAppGalleryItemById);

module.exports = router;