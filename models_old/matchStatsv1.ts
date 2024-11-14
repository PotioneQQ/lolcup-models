//wherever needed: https://darkintaqt.com/blog/champ-ids
//TODO: create lookup table with championIds, and key names

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('');

export class MatchStats extends Model {}
MatchStats.init(
    {
        id: {},
        gameCreationTime: {},
        gameStartTime: {},
        gameEndTime: {},
        gameDuration: {},  //possibly useless because of error documented in riot api doc
        team1name: {},
        team1participants: {},
        team1bans: {},  //array of [{championId and pickTurn}]
        team1heralds: {},   //all objectives are supposed to be an array [first(bool), amount(int)]
        team1barons: {},
        team1dragons: {},
        team1inhibs: {},
        team1towers: {},    //objectives
        team2name: {},
        team2participants: {},
        team2bans: {},
        team2heralds: {},   //all objectives are supposed to be an array [first(bool), amount(int)]
        team2barons: {},
        team2dragons: {},
        team2inhibs: {},
        team2towers: {},    //objectives
        winner: {}, //bool (true if 1 wins, false if 2 wins) or int
        tournamentCode: {}, // fk from gen match code
    }
)