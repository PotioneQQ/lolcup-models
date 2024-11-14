//potentially add:
//specific damage dealt (true, magic, physical)

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('');

export class PlayerStats extends Model {}
PlayerStats.init(
    {
        id: {},
        matchid: {},            //fk of match id
        playerId: {},
        playerName: {},         //riotIdGameName // possibly not needed bc of playerId
        playerTag: {},          //riotIdTagLine  // possibly not needed bc of playerId
        playerPuuid: {},        // possibly not needed bc of playerId
        participantId: {},
        championName: {},
        championTransform: {},  //needed for ONE SPECIFIC CIRCUMSTANCE (kayn transform)
        teamPosition: {},   
        champLevel: {},
        kills: {},
        deaths: {},
        assists: {},
        takedownsCalculated: {},          //k+a either calculated or from challengesDTO
        kdaCalculated: {},      //(k+a)/d   //can be replaced with challengesDTO
        visionScore: {},
        crossedSwordPings: {},  //allInPings
        flagPings: {},          //assistMePings
        bluePings: {},          //commandPings
        questionPings: {},      //enemyMissingPings
        eyePings: {},           //enemyVisionPings
        haltPings: {},          //getBackPings
        wardPings: {},          //needVisionPings
        arrowPings: {},         //onMyWayPings
        minionPings: {},        //pushPings
        goldEarned: {},
        goldSpent: {},
        items: {},              //array of ids
        runes: {},              //array of perks
        summonerSpell1: {},
        summonerSpell2: {},
        doubleKills: {},
        tripleKills: {},
        quadraKills: {},
        pentaKills: {},
        largestKillingSpree: {},
        objectivesStolen: {},
        firstBloodKill: {},
        firstTowerKill: {},
        turretKills: {},
        spell1casts: {},
        spell2casts: {},
        spell3casts: {},
        spell4casts: {},
        timeCCingOthers: {},
        totalTimeSpentDead: {},
        damageDealtToTurrets: {},
        damageDealtToObjectives: {},
        damageDealtToBuildings: {},
        totalDamageDealt: {},   //potentially useless
        totalDamageDealtToChampions: {},
        totalDamageTaken: {},
        totalHeal: {},
        totalHealsOnTeammates: {},
        totalMinionsKilled: {},
        totalAllyJungleMinionsKilled: {},
        totalEnemyJungleMinionsKilled: {},
        //any field after this point is either from ChallengesDTO
        teleportTakedowns: {},
        abilityUses: {},
        voidMonsterKill: {},    //check what qualifies
        bountyGold: {},
        damagePerMinute: {},    //can be calculated
        goldPerMinute: {},      //can be calculated
        kda: {},                //can be calculated
        killParticipation: {},  //can be calculated
        killsNearEnemyTurret: {},
        killsUnderOwnTurret: {},
        multikills: {},
        outnumberedKills: {},
        skillshotsHit: {},
        skillshotsDodged: {},
        soloKills: {},
        takedowns: {},          //can be calculated
        teamDamagePercentage: {},
        wardTakedowns: {},
        wardsGuarded: {},
    }
)
