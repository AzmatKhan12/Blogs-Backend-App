const mongoose=require ('mongoose');
const lodash=require('lodash')
const authorSchema=new mongoose.Schema({
    fname: {
        type: String,
        required:true,
        trim: true
    }, 
    lname: {
        type: String,
        required:true,
        trim: true
    }, 
    title: {
        type: String,
        required: true, 
        enum:['Mr', 'Mrs', 'Miss']
    }, 
    email: {
        type: String,
        required: true, 
        unique: true,
        trim: true,
        lowercase: true
    }, 
    password: {
        type:String,
        required: true,
        trim: true
    }}, {timestamps:false}
);

module.exports=mongoose.model('Author', authorSchema)