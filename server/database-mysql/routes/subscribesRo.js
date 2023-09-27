const express =require('express')
const { getAll, getOne, postNewSub, drop, change } = require('../controller/subscribesCo')



const subsRouter = express.Router()



subsRouter.get('/subGetAll' , getAll)
subsRouter.get('/subGetOne/:id' , getOne)
subsRouter.post('/subPost' , postNewSub)
subsRouter.delete('/subdelete/:id' , drop)
subsRouter.put('/subUpdate/:id' , change)





module.exports.subsRouter = subsRouter