/**
 * Main server file for the application.
 */

// Import Express
const express = require('express');

// Import route modules
const mentorRoutes = require('./routes/mentor_routes');
const appRoutes = require('./routes/app_gallery_routes');

// Create an Express application
const app = express();

// Define the port for the server to listen on
const PORT = process.env.PORT || 8080;

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

/**
 * Start the server and listen on the specified port.
 * 
 * @function
 * @memberof module:server
 */
const listener = app.listen(PORT, () => console.log(`it's alive on: http://localhost:${listener.address().port}`));