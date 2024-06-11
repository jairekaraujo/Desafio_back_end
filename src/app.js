const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Database = require("./config/Database")
const errorHandler = require("./middlewares/erroHadler");
const { model } = require("mongoose");

dotenv.config()
const app = express()
Database()

app.get("/", (res,req) =>{
    res.statusCode(200).json({message: "listo"})
})

app.use(cors())
app.use(express())

app.use(require("./routes/authRouter"))
app.use(require("./routes/postRouter"))
app.use(require("./routes/useRouter"))

app.use((req, res, next) =>{
    res.status(404),json({message: "no se puede encontrar"})
})

app.use(errorHandler)

model.export = app