const express =require('express')
const { getAll, getOne, postNewuser, drop, change } = require('../controller/usersCo')



const usersRouter = express.Router()



usersRouter.get('/userGetAll' , getAll)
usersRouter.get('/userGetOne/:id' , getOne)
usersRouter.post('/userPost' , postNewuser)
usersRouter.delete('/userdelete/:id' , drop)
usersRouter.put('/userUpdate/:id' , change)





module.exports.usersRouter = usersRouter