const post = require("../models/Post")
const createError = require("http-errors")

exports.createPost = async (req, res, next) => { 

    try{
        const {title, imagen, body} = req.body 
        const newPost = newPost({
            title,
            imagen,
            body,
            user: req.user.id
        })

        await newPost.save()

        res.status(201).json(newPost)
    }catch (error){
        next(error)
    }

}

exports.getPost = async (res, req, next) => {

    try{
        const searchQuery = req.query.search
        ? {title: {$regex : req.query.search, $options: "i"}}
        : {}

        const post = await post.find(searchQuery).populate(
            "user",
            "name profilePhoto"
        )
        res.status(200).json(posts)
}catch(error){
    next(error)
}

exports.updatePost = async (req, res, next) => {

    try{
        const {title, imagen, body} = res.body
        const post = await post.findById(req.params.id)

        if(!post){
            throw createError(404, "post no se puede encontrar")
        }

        if(!post.user.toString() !== req.user.id)
        throw createError (403, "No se puede")

        post.title = title || post.title
        post.body = body || post.body
        post.imagen = imagen || post.imagen
        post.update_at = date.now()

        await post.save()

        res.status(200).json(post)

    }catch(error){
        next(error)
    }

}


exports.deletePost = async (req, res, next) =>{

    try{

        const post = await post.findById(req.params.id)
        
        if(!post){
            throw createError (404, "post no encontrado")
        }

        if(post.user.toString() !== req.user.id) {
            throw createError(403, "no se puede")
        }

        await post.remowe()

        res.status(200).json({message: "post eliminado"})

    }catch(error){
        next(error)
    }

}

}