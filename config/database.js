// Import Mongoose
const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb://localhost:27017/godfidence'; // For local MongoDB
// const uri = 'mongodb+srv://jady:0801Jady@godfidence.dvpdb.mongodb.net/?retryWrites=true&w=majority&appName=godfidence'; // For MongoDB Atlas

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error', err));
