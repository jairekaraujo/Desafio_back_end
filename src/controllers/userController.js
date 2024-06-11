const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt.js")
const user = require("../models/User")
const createError = require("http-errors")

exports.registre = async (req, res, next) => {

    try{
        const {name, correo, password, profilePhoto} = req.body

        const DeleteUser = await user.findOne({email})
        if(DeleteUser){
            throw createError (400, "correo registrado")
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new UserActivation({
            name,
            correo,
            profilePhoto,
            password: hashedPassword
        })

        await newUser.save()
        res.status(201).json(newUser)

    }catch(error){  
        next(error)
    }

}


exports.getUserById = async (req, res, next) => {

    try{
        const user = await user.findByID(req.params.id).select("-password")
        if(!user){
            throw createError(400, "usuario no encontrado")
        }
        res.status(200).json(user)
    }catch(error){
        next(error)
    }
}