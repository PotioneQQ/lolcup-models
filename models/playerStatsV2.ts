const { Table, Column, DataType, Model } = require('sequelize');

@Table({
    tableName: 'playerStats'
})

export class PlayerStats extends Model {
        @Column({
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        })
        id: number;
        
        @Column({
            type: DataType.STRING
        })
        matchId: string;

        @Column({
            type: DataType.INTEGER
        })
        playerId: number;

        @Column({   //can be taken from playerId, however is a possible way to double-check
            type: DataType.STRING
        })
        playerName: string;

        @Column({   //can be taken from playerId, however is a possible way to double-check
            type: DataType.STRING
        })
        playerTag: string;

        @Column({   //can be taken from playerId, however is a possible way to double-check
            type: DataType.STRING
        })
        playerPuuid: string;

        @Column({
            type: DataType.STRING
        })
        championName: string;

        @Column({
            type: DataType.STRING
        })
        position: string;
        
        @Column({
            type: DataType.INTEGER
        })
        kills: number;
                
        @Column({
            type: DataType.INTEGER
        })
        deaths: number;
                
        @Column({
            type: DataType.INTEGER
        })
        assists: number;
                
        @Column({   //can be calculated (kills+assists) or taken from ChallengesDTO
            type: DataType.INTEGER
        })
        takedowns: number;
                
        @Column({   //(kills + assists) / deaths //or can be taken from ChallengesDTO
            type: DataType.INTEGER
        })
        kda: number;
                
        @Column({
            type: DataType.INTEGER
        })
        visionScore: number;
                
        @Column({
            type: DataType.INTEGER
        })
        goldSpent: number;
   
        @Column({
            type: DataType.INTEGER
        })
        goldEarned: number;

        @Column({
            type: DataType.ARRAY(DataType.INTEGER)
        })
        items: number[];

        @Column({   //array of perks.statperks, perks.styles.selections.perk; always is comprised of 3(def+flex+off)+4+2; always 4 numbers
            type: DataType.ARRAY(DataType.INTEGER)
        })
        runes: number[];
                
        @Column({
            type: DataType.ARRAY(DataType.INTEGER)
        })
        summonerSpells: number[];
                
        @Column({
            type: DataType.INTEGER
        })
        doubleKills: number;
                
        @Column({
            type: DataType.INTEGER
        })
        tripleKills: number;
                
        @Column({
            type: DataType.INTEGER
        })
        quadraKills: number;
                
        @Column({
            type: DataType.INTEGER
        })
        pentaKills: number;
        
        @Column({
            type: DataType.INTEGER
        })
        largestKillingSpree: number;
                
        @Column({
            type: DataType.INTEGER
        })
        objectivesStolen: number;
                
        @Column({
            type: DataType.BOOLEAN
        })
        firstBlood: boolean;
                
        @Column({
            type: DataType.BOOLEAN
        })
        firstTower: boolean;
                
        @Column({
            type: DataType.INTEGER
        })
        turretKills: number;
                
        @Column({   //spell1casts-spell4casts with regard to indexes
            type: DataType.ARRAY(DataType.INTEGER)
        })
        spellCasts: number[];
                
        @Column({
            type: DataType.INTEGER
        })
        totalTimeSpentDead: number;
                
        @Column({   //can be replaced with damageDealtToBuildings
            type: DataType.INTEGER
        })
        damageDealtToTurrets: number;
                
        @Column({
            type: DataType.INTEGER
        })
        damageDealtToObjectives: number;
                
        @Column({
            type: DataType.INTEGER
        })
        damageDealtToBuildings: number;
                
        @Column({
            type: DataType.INTEGER
        })
        totalDamageDealt: number;
                
        @Column({
            type: DataType.INTEGER
        })
        totalDamageDealtToChampions: number;
                
        @Column({
            type: DataType.INTEGER
        })
        totalDamageTaken: number;
                
        @Column({
            type: DataType.INTEGER
        })
        totalHeal: number;
                
        @Column({
            type: DataType.INTEGER
        })
        totalHealsOnTeammates: number;
                
        @Column({
            type: DataType.INTEGER
        })
        totalMinionsKilled: number;
                
        @Column({
            type: DataType.INTEGER
        })
        totalAllyJungleMinionsKilled: number;
                
        @Column({
            type: DataType.INTEGER
        })
        totalEnemyJungleMinionsKilled: number;
        //from this point onward stats are taken exclusively from challengesDTO
        @Column({
            type: DataType.INTEGER
        })
        abilityUses: number;
                
        @Column({
            type: DataType.INTEGER
        })
        bountyGold: number;
                
        @Column({
            type: DataType.INTEGER
        })
        damagePerMinute: number;
                
        @Column({
            type: DataType.INTEGER
        })
        goldPerMinute: number;
                
        @Column({
            type: DataType.INTEGER
        })
        kdaChallengesDTO: number;
                
        @Column({
            type: DataType.INTEGER
        })
        killParticipation: number;
                
        @Column({
            type: DataType.INTEGER
        })
        killsUnderEnemyTurret: number;
                
        @Column({
            type: DataType.INTEGER
        })
        killsUnderOwnTurret: number;
                
        @Column({
            type: DataType.INTEGER
        })
        multikills: number;
                
        @Column({
            type: DataType.INTEGER
        })
        outnumberedKills: number;
                
        @Column({
            type: DataType.INTEGER
        })
        skillshotsHit: number;
                
        @Column({
            type: DataType.INTEGER
        })
        skillshotsDodged: number;
                
        @Column({
            type: DataType.INTEGER
        })
        soloKills: number;
                
        @Column({
            type: DataType.INTEGER
        })
        teamDamagePercentage: number;
                
        @Column({
            type: DataType.INTEGER
        })
        wardTakedowns: number;
                
        @Column({
            type: DataType.INTEGER
        })
        wardsGuarded: number;
}