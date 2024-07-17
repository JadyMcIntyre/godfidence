const express = require('express');
const mentorRoutes = require('./routes/mentor');
const appRoutes = require('./routes/app');

const app = express();

const PORT = process.env.PORT || 8080;

app.use('/mentor', mentorRoutes);

app.use('/app', appRoutes);

const listener = app.listen(PORT, () => console.log(`it's alive on: http://localhost:${listener.address().port}`));