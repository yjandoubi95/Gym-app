const Subscribes = require('../models/subscribesModel')


module.exports = {

    getAll : async(req , res)=>{
        try {
            const allSubs = await Subscribes.findAll()
            res.status(200).send(allSubs)
        } catch (error) {
            throw error
        }
    },
    getOne : async(req ,res)=>{
        try {
            const oneSub = await Subscribes.findOne({where : {id : req.params.id}})
            res.status(200).send(oneSub)
        } catch (error) {
            throw error
        }
    },
    postNewSub : async(req , res)=>{
       try {
        const newPost = await Subscribes.create(req.body)
        res.status(201).send(newPost)
       } catch (error) {
        throw error
       }
    },
    drop : async(req , res)=>{
       try {
        await Subscribes.destroy({where :{id : req.params.id}})
        res.status(203).send('DELETED')
       } catch (error) {
        throw error
       }
    },
    change : async(req , res)=>{
        try {
            const changed =await Subscribes.update(req.body ,{where :{id :req.params.id}})
            res.status(204).send(changed)
        } catch (error) {
            throw error
        }
    }
}