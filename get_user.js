const User = require('./user_schema');

app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  