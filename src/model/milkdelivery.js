const mongoose = require("mongoose");

const myschema = new mongoose.Schema({
    customer:{
        type:String,
        required: true
    },
    milktype: {
        type : String,
        required : true,
        
    },
    quantity :{
        type: String,
        required: true,
        
    },
    orderedAt: {
        type: Date,
        default: new Date()
       
    }
    

})

const milkorder = new mongoose.model("milkorder",myschema);
module.exports = milkorder;