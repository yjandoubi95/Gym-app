const { Sequelize, DataTypes } = require("sequelize");
const connection = require('../connection')


const Users = connection.define('Users', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports = Users