const { Sequelize, DataTypes } = require("sequelize");
const connection = require('../connection')


const Subscribes = connection.define('subscribes' , {
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    price : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


module.exports = Subscribes