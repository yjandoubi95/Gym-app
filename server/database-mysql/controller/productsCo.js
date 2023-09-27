const Products = require('../models/products')


module.exports = {

    getAll : async(req , res)=>{
        try {
            const allprods = await Products.findAll()
            res.status(200).send(allprods)
        } catch (error) {
            throw error
        }
    },
    getOne : async(req ,res)=>{
        try {
            const oneprod = await Products.findOne({where : {id : req.params.id}})
            res.status(200).send(oneprod)
        } catch (error) {
            throw error
        }
    },
    postNewprod : async(req , res)=>{
       try {
        const newPost = await Products.create(req.body)
        res.status(201).send(newPost)
       } catch (error) {
        throw error
       }
    },
    drop : async(req , res)=>{
       try {
        await Products.destroy({where :{id : req.params.id}})
        res.status(203).send('DELETED')
       } catch (error) {
        throw error
       }
    },
    change : async(req , res)=>{
        try {
            const changed =await Products.update(req.body ,{where :{id :req.params.id}})
            res.status(204).send(changed)
        } catch (error) {
            throw error
        }
    }
}