// Importing the 'mentors' data from the schema file
const Mentor = require('./schema');

/**
 * Controller function to get all mentors.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find({});
    res.status(200).json(mentors);
  } catch (e) {
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * Controller function to create a mentor.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const createMentor = async (req, res) => {
  const { id, name, expertise, description } = req.body;

  if (!id || !name || !expertise || description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newMentor = new Mentor({ id, name, expertise, description });
    await newMentor.save();
    res.status(201).json(newMentor);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getMentors, createMentor }