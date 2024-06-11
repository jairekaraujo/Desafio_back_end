const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const createError = require("http-errors")
const user = require("../models/User")

exports.login = async (req, res, next) => {

    try{
        const {email , password} = req.body

        const user = await user.findOne({email})
        if(!user){
            throw createError(400, "invalid email")
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            throw createError(400, "invalid password")
        }

        const token = jwt.sign({id: user._id}, process.env,JWT_SECRET, {
            expiresIn:"1 hora"
        })

        res.json({token})

    }catch(error){
        next(error)
    }
}