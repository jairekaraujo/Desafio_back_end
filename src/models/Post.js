const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title : { type:String, req : true},
    imagen: {type:String},
    body: {type:String, req:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref:"User", req:true},
    created_at: {type:Date, default: Date.now},
    updated_at: {type:Date, default: Date.now}


})

module.exports = mongoose.model("Post", postSchema)