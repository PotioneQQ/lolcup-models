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
            type: DataType.DATE
        })
        meetDate: Date;

        @Column({
            type: DataType.STRING
        })
        phase: string;
        
        @Column({
            type: DataType.STRING
        })
        group: string;

        @Column({
            type: DataType.INTEGER,
        })
        team1: number;
        
        @Column({
            type: DataType.INTEGER,
        })
        team2: number;
        
        @Column({
            type: DataType.INTEGER,
        })
        winner: number;
    }