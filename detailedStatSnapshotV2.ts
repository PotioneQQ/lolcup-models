const { Table, Column, DataType, Model } = require('sequelize');

@Table({
    tableName: 'meets'
})

export class Meet extends Model {
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
    timestamp: number;
}