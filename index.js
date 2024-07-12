const app = require('express')();
const mentorRoutes = require('routes/mentor/mentor_routes.js');

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).send('Godfidence API');
});

app.use('/mentors', mentorRoutes);

app.listen(PORT, () => console.log(`it's alive on: http://localhost:${PORT}`));