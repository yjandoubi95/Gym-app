const {Sequelize} = require("sequelize");

const connection = new Sequelize(
  'gymadmin',
  'root',
  'root',
   {
     host: 'localhost',
     dialect: 'mysql'
   }
 );


 connection.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});



module.exports = connection