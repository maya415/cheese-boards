const { DataTypes, Model } = require('sequelize');
const db = require('../db/db');


class Board extends Model {

};

Board.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    }

}, {
    sequelize: db
})

module.exports = Board;