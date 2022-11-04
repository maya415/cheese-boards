const { DataTypes, Model } = require('sequelize');
const db = require('../db/db');


class Cheese extends Model {

};

Cheese.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }

}, {
    sequelize: db
})

module.exports = Cheese;