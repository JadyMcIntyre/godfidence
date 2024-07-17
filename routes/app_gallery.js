// routes/mentorRoutes.js
const express = require('express');

const router = express.Router();

const getAppGalleryController = require('../controllers/get_app_gallery_controller');

router.get('/', getAppGalleryController.getAllAppGalleryItems);
router.get('/:id', getAppGalleryController.getAppGalleryItemById);

module.exports = router;