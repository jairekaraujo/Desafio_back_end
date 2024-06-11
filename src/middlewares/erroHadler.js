const createError = require("http-errors")

module.exports = (error, req, res, next) =>{
    if(createError.isHttpError(error)){
        res.status(error.statusa).json({message: error.message})
    }else{
        res.status(500).json({message: "error en el servidor"})
    }
}