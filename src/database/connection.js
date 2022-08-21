
require('dotenv').config({path:"../config.env"})
const mongoose = require("mongoose");
const URL = process.env.DB_URL;
mongoose.connect(URL).then(()=>{
    console.log("successfully connected to database");
}).catch((error)=>{
   console.log(` not connected to database error is ${error}`);
})
    



