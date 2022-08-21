require('dotenv').config();

const express = require("express");
const cors = require("cors");
require("../src/database/connection");
const router = require("./routers/routes");

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
app.use(express.json());

app.use(router);

app.get("/",(req,res)=>{
    res.send("app is running successfully")

})

app.listen(port,()=>{
    console.log(`app running successfully at port${port}`);
})