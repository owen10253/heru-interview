drop database if exists leaderboard;

CREATE DATABASE leaderboard;

USE leaderboard;

CREATE TABLE events (
  event_id int not null AUTO_INCREMENT,
  event_name text not null,
  primary key (event_id)
);

create table players (
  player_id int not null AUTO_INCREMENT,
  name text not null,
  pic text null,
  primary key (player_id)
);

create table scores (
  score_id BINARY(16) not null,
  player_id int not null,
  event_id int not null,
  score int not null,
  primary key (score_id)
);

-- Load data to database with query below --------------
use leaderboard;
insert into events (event_name)
SELECT distinct event_name
FROM leaderboard.player_score;

insert into players (name, pic)
SELECT distinct name, pic
FROM leaderboard.player_score;

insert into scores (score_id, player_id, event_id, score)
select UUID_TO_BIN(UUID()), players.player_id, events.event_id, player_score.score
FROM player_score
	join players on players.name = player_score.name
  join events on events.event_name = player_score.event_name
    