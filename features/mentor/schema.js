const mongoose = require('mongoose');

const mentorschema = new mongoose.Schema({
    id: Number,
    name: String,
    expertise: String,
    description: String
  });
  
  const Mentor = mongoose.model('Mentor', mentorschema);

  module.exports = Mentor;
  