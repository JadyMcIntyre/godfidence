const app = require('express')();

const PORT = 8080;

app.get('/user', (req, res) => {
    res.status(200).send({
        id: 1,
        user: 'Jady'
    })
});

app.listen(
    PORT,
    () => console.log(`it's alive on: http://localhost:${PORT}`)
);