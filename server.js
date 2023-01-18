
const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
app.use(express.json())
const dbConfig = require('./config/dbConfig');
const port = process.env.PORT || 5000;
const userRoute= require("./routes/userRoute")


app.use("/api/user",userRoute)

app.listen(port,() => console.log(`Node running on server ${port}`))  