var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      res.status(200).send('Message posted!')

      console.log('Controller.messages.get')
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.status(200).send('something something ');

      models.messages.post(req, res)
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.status(200).send('something something ');
    },
    post: function (req, res) {
      res.status(200).send('something something ');
    }
  }
};

