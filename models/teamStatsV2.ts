//player indexes in players have to be equivalent to declared player position [top, jg, mid, adc, sup]


const { Table, Column, DataType, Model } = require('sequelize');

@Table({
    tableName: 'teamStats'
})

export class TeamStats extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
    })
    matchId: number;

    @Column({
        type: DataType.INTEGER
    })
    team: number;

    @Column({
        type: DataType.STRING
    })
    side: string;

    @Column({
        type: DataType.ARRAY(DataType.INTEGER)
    })
    players: number[];
    
    @Column({
        type: DataType.ARRAY(DataType.INTEGER)
    })
    playerStats: number[];

    @Column({
        type: DataType.ARRAY(DataType.INTEGER)
    })
    bans: number[];

    @Column({
        type: DataType.ARRAY(DataType.INTEGER)
    })
    picks: number[];

    @Column({
        type: DataType.INTEGER
    })
    dragons: number;
    
    @Column({
        type: DataType.INTEGER
    })
    heralds: number;
    
    @Column({
        type: DataType.INTEGER
    })
    barons: number;
    
    @Column({
        type: DataType.INTEGER
    })
    grubs: number;
    
    @Column({
        type: DataType.INTEGER
    })
    turrets: number;
    
    @Column({
        type: DataType.INTEGER
    })
    inhibs: number;

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

    @Column({
        type: DataType.INTEGER
    })
    gold: number;
}