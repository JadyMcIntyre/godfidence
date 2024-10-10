/**
 * Main server file for the application.
 */

// Import dotenv to load environment variables
require('dotenv').config();

// Import Express and other dependencies
const express = require('express');
const mongoose = require('./config/database');
const User = require('./user_schema');

// Import route modules
const mentorRoutes = require('./routes/mentor_routes');
const appRoutes = require('./routes/app_gallery_routes');
const userRoutes = require('./routes/user_routes');

// Create an Express application
const app = express();

app.use(express.json());

// Define the port for the server to listen on
const PORT = process.env.PORT;
const DBPORT = process.env.DBPORT;

/**
 * Use mentor routes for any requests to /mentor.
 * 
 * @name /mentor
 * @function
 * @memberof module:server
 */
app.use('/mentor', mentorRoutes);

/**
 * Use app gallery routes for any requests to /app.
 * 
 * @name /app
 * @function
 * @memberof module:server
 */
app.use('/app', appRoutes);

app.use('/users', userRoutes)

// Start the server
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(5051, () => console.log(process.env.USE_ATLAS === 'true' ? 'Mongo DB running on Atlas' : `Mongo running on http://localhost:${5051}`));
  });
  
  // Handle database connection errors
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

/**
 * Start the server and listen on the specified port.
 * 
 * @function
 * @memberof module:server
 */
const listener = app.listen(PORT, () => console.log(`it's alive on: http://localhost:${listener.address().port}`));