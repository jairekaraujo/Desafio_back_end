    //quinto
    const createError = require("http-errors")
    const userUseCase = require('../usecases/users.usecases')
    const jwt = require('../lib/jwt')
    
    async function auth(req,res,next){
        try {
    
            const  token = req.headers.authorization
    
            if(!token){
                throw createError(401,"JWT is required")
            }
            
            const payload = jwt.verify(token)
            
            const user = await userUseCase.getById(payload.id)
    
            req.user = user
    
            next()
        } catch (error) {
        
            res.status(401)
            res.json({
                success: false,
                error: error.message
            })
            
        }
    
    }
    
    
    module.exports = auth