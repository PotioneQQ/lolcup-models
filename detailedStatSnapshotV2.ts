const { Table, Column, DataType, Model } = require('sequelize');

@Table({
    tableName: 'snapshotStats'
})

export class SnapshotStats extends Model {
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
    frame: number;

    @Column({
        type: DataType.INTEGER
    })
    timestamp: number;

    @Column({
        type: DataType.STRING
    })
    player: string;

    @Column({
        type: DataType.INTEGER
    })
    totalGold: number;

    @Column({
        type: DataType.INTEGER
    })
    totalDamageDoneToChampions: number;

    @Column({
        type: DataType.INTEGER
    })
    totalDamageTaken: number;

    @Column({
        type: DataType.JSON
    })
    events: object;
}