const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    bio: String,
    // Add other relevant fields
  });
  
  const User = mongoose.model('User', userSchema);

  module.exports = User;
  