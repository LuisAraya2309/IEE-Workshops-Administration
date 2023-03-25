const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({

    email:{
        type:String,
        required:false,
    },

    password:{
        type:String,
        required:false,
    },

    name:{
        type:String,
        required:false,
    }
});

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel