var db = require('../db');

module.exports = {
  messages: {
    get: () => {
      var sqlStr = '';
      db.query(sqlStr, (err, data)=>{
        console.log('GET FROM DB')
      })
    }, // a function which produces all the messages
    post: ({}, callback) => {
      var sqlStr = 'insert into messages ('
      db.query(sqlStr, (err, data) => {
        console.log(data)
      })
    }
  },
};

