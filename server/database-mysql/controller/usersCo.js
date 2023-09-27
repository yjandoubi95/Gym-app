const Users = require('../models/usersModel')


module.exports = {

    getAll : async(req , res)=>{
        try {
            const allusers = await Users.findAll()
            res.status(200).send(allusers)
        } catch (error) {
            throw error
        }
    },
    getOne : async(req ,res)=>{
        try {
            const oneuser = await Users.findOne({where : {id : req.params.id}})
            res.status(200).send(oneuser)
        } catch (error) {
            throw error
        }
    },
    postNewuser : async(req , res)=>{
       try {
        const newPost = await Users.create(req.body)
        res.status(201).send(newPost)
       } catch (error) {
        throw error
       }
    },
    drop : async(req , res)=>{
       try {
        await Users.destroy({where :{id : req.params.id}})
        res.status(203).send('DELETED')
       } catch (error) {
        throw error
       }
    },
    change : async(req , res)=>{
        try {
            const changed =await Users.update(req.body ,{where :{id :req.params.id}})
            res.status(204).send(changed)
        } catch (error) {
            throw error
        }
    }
}