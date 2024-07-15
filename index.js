const express = require('express');
const mentorRoutes = require('./routes/mentor');

const app = express();

const PORT = process.env.PORT || 8080;

app.use('/mentor', mentorRoutes);

const listener = app.listen(PORT, () => console.log(`it's alive on: http://localhost:${listener.address().port}`));