var models = require('../models');

module.exports = {
  leaderboard: {
    get: (req, res) => {
      // handle GET request for leaderboard data loading.
      models.leaderboard.get(req, res)
    },
    post: (req, res) => {
      // test POST 
      res.status(200).send('something something ');
      models.messages.post(req, res)
    }
  }
};

