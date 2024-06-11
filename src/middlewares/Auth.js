const jwt = require("jsonwebtoken")
const createError = require("http-errors")

module.exports = (req, res, next) => {

    const token = req.header("Autorizando").replace("Portador", "")
    if(!token){
        return next(createError(401, "acceso denegado, token prohibido"))
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch(error){
        next(createError(400, "invalido token"))
    }
}