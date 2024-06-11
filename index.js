require('dotenv').config()
const app = require("./src/app")
const Database = require('./src/config/Database')
const PORT = process.env.PORT || 8080;

Database.connect().then(() => {
    server.listen(PORT, () => {
        console.log("server correcto")
    })
}).catch((error) =>{
    console.log(`Database error al conectarse: `, error)
})
