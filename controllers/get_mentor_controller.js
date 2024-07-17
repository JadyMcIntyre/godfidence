// controllers/mentorController.js
const { mentors } = require('../models/mentor_model');

exports.getMentorById = (req, res) => {
    const mentorId = parseInt(req.params.id, 10);
    const mentor = mentors.find(m => m.id === mentorId);

    if (mentor) {
        res.status(200).send(mentor);
    } else {
        res.status(404).send({ message: 'Mentor not found' });
    }
};

exports.getAllMentors = (req, res) => {
    res.status(200).send(mentors);
};