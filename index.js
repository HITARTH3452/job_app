const express = require("express");

const mongoose = require("mongoose");

const jobRoutes = require("./routes/job");
// const { json } = require("body-parser");

const app = express();

require('dotenv').config()

app.use(express.json());
// console.log(process.env.DB_CONNECTION_URL);

mongoose.connect(process.env.DB_CONNECTION_URL)
        .then(() => console.log("connection with Database established successfully"))
        .catch((err) => console.log("ERR_OCCURED_CONNECTING_DB",err))


app.use(jobRoutes);

app.listen(10000 , () => console.log("Server is up and running at 8080"));
