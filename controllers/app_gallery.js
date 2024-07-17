// controllers/mentorController.js
const { apps } = require('../models/app_gallery');

exports.getAppById = (req, res) => {
    const appId = parseInt(req.params.id, 10);
    const app = apps.find(m => m.id === appId);

    if (app) {
        res.status(200).send(app);
    } else {
        res.status(404).send({ message: 'Mentor not found' });
    }
};

exports.getAllApps = (req, res) => {
    res.status(200).send(apps);
};