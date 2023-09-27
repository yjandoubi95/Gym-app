const { Sequelize, DataTypes } = require("sequelize");
const connection = require('../connection')


const Product = connection.define('products' , {
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl : {
        type: DataTypes.STRING,
        allowNull: false
    },
    price :{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Product