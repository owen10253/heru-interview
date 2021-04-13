var models = require('../models');

module.exports = {
  leaderboard: {
    get: (req, res) => {
      console.log(req.query)
      models.leaderboard.get(req, res)

      console.log('Controller.messages.get')
    }, // a function which handles a get request for all messages
    post: (req, res) => {
      res.status(200).send('something something ');

      models.messages.post(req, res)
    } // a function which handles posting a message to the database
  }
};

