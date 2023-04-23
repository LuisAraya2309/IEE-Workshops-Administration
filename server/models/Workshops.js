const { default: mongoose } = require("mongoose");

const WorkshopsSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    }
});

const WorkshopsModel = mongoose.model("workshops",WorkshopsSchema)
module.exports = WorkshopsModel