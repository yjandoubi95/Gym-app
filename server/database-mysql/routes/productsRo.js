const express =require('express')
const { getAll, getOne, postNewprod, drop, change } = require('../controller/productsCo')



const prodsRouter = express.Router()



prodsRouter.get('/prodGetAll' , getAll)
prodsRouter.get('/prodGetOne/:id' , getOne)
prodsRouter.post('/prodPost' , postNewprod)
prodsRouter.delete('/proddelete/:id' , drop)
prodsRouter.put('/prodUpdate/:id' , change)





module.exports.prodsRouter = prodsRouter