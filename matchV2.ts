const { Table, Column, DataType, Model } = require('sequelize');

@Table({
    tableName: 'matches'
})

export class Match extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER
    })
    meetId: number;
    
    @Column({
        type: DataType.DATE
    })
    matchStartTime: Date;

    @Column({
        type: DataType.INTEGER
    })
    matchDuration: number;

    @Column({
        type: DataType.STRING
    })
    matchId: string;

    @Column({
        type: DataType.STRING
    })
    tournamentCode: string;

    @Column({
        type: DataType.INTEGER
    })
    team1: number;

    @Column({
        type: DataType.INTEGER
    })
    team1stats: number;

    @Column({
        type: DataType.INTEGER
    })
    team2: number;
    
    @Column({
        type: DataType.INTEGER
    })
    team2stats: number;

    @Column({
        type: DataType.INTEGER
    })
    winner: number;

    @Column({
        type: DataType.STRING
    })
    streamURL: string;
}