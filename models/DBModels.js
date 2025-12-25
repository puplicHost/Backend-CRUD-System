
const mongoose = require ("mongoose")

// Database Schema
const DatabaseShema = new mongoose.Schema({
    title:{
        type: String,
        required : true
    },
   price:{
    type : Number,
    required : true
   }
})

module.exports =  mongoose.model('NodeData',DatabaseShema)

