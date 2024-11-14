const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('');

export class GeneratedMatch extends Model {}
GeneratedMatch.init(
    {
        id: {
           type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        team1: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        team2: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        matchcode: {
            type: DataTypes.STRING
        },
        matchid: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize
    }
)