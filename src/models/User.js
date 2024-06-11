const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type: String, req:true},
    profilePhoto: {type:String},
    email: {type:String, req:true, unique: true},
    password: {type:String, req:true},
    created_at : {type:Date, default: Date.now},
    updated_at : {type:Date, default: Date.now}
})

module.exports = mongoose.model("user", userSchema)