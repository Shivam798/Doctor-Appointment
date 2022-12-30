
const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const dbConfig = require('./config/dbConfig');
const port = process.env.PORT || 5000;


app.listen(port,() => console.log(`Node running on server ${port}`))  