// Import Mongoose
const mongoose = require('mongoose');
// Load environment variables
require('dotenv').config(); 

const uri = process.env.USE_ATLAS === 'true' ? process.env.MONGODB_URI_ATLAS : process.env.MONGODB_URI_LOCAL;

/**
 * Connect to MongoDB using Mongoose.
 * 
 * Uses the provided URI and connects with options to avoid deprecation warnings.
 */
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error', err));

  module.exports = mongoose;
  