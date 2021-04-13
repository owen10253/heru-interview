var db = require('../db');

module.exports = {
  leaderboard: {
    get: (req, res) => {
      var top100 = req.query.view === 'hundred';
      //var sqlStr = 'select ' + top100 + ' * from events where event_name = "' + req.query.event_name + '"';
      var sqlStr = `
      select BIN_TO_UUID(score_id) as "id", players.name, scores.score, players.pic
        , dense_rank() over (partition by events.event_id order by scores.score) as 'rank'
      from scores
        join events on events.event_id = scores.event_id
        join players on players.player_id = scores.player_id
      where events.event_name = "${req.query.event_name}"
      order by scores.score
      `;

      sqlStr = top100 ? `select * from (${sqlStr}) t where t.rank <= 100;` : sqlStr;

      db.query(sqlStr, (err, data) => {
        if (err) {
          // Database Error, throw error
          res.status(502).send('Server Error.')
        } else {
          // Query error or success. 
          if (data.length === 0) {
            res.status(502).send('Event Not Found')
          } else {
            res.status(200).send(data)
          }
        }
      })
    }
  },
};

