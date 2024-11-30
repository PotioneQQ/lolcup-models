const { Table, Column, DataType, Model } = require('sequelize');

@Table({
    tableName: 'matchEvents'
})

export class matchEvents extends Model {
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
        type: DataType.ARRAY(DataType.JSON)
    })
    events: object[]
}