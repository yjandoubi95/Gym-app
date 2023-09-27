const express = require("express");
const db = require('./database-mysql/models/relation');
const { subsRouter } = require("./database-mysql/routes/subscribesRo");
const {usersRouter} = require('./database-mysql/routes/usersRo')
const {prodsRouter} = require('./database-mysql/routes/productsRo')

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
// const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));



app.use('/sub' ,subsRouter )
app.use('/user' , usersRouter)
app.use('/prod' , prodsRouter)


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});

