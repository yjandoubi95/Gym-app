const connection = require('../connection')
const Users = require('./usersModel')
const Subscribes = require('./subscribesModel')
const products = require('./products')



Users.belongsToMany(Subscribes ,{ through: 'usAndSub' } )
Subscribes.belongsToMany(Users ,{ through: 'usAndSub' } )

Users.hasMany(products)
products.belongsTo(Users)




// connection.sync({alter:true}).then(() => {
//     console.log('Users table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });


 