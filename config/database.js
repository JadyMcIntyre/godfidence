// Import Mongoose
const mongoose = require('mongoose');

/**
 * MongoDB connection URI.
 * Uncomment the appropriate URI for local MongoDB or MongoDB Atlas.
 */
const uri = 'mongodb://localhost:27017/godfidence'; // For local MongoDB
// const uri = 'mongodb+srv://jady:0801Jady@godfidence.dvpdb.mongodb.net/?retryWrites=true&w=majority&appName=godfidence'; // For MongoDB Atlas

/**
 * Connect to MongoDB using Mongoose.
 * 
 * Uses the provided URI and connects with options to avoid deprecation warnings.
 */
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error', err));