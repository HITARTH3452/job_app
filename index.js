const express = require("express");

const mongoose = require("mongoose");

const jobRoutes = require("./routes/job");
// const { json } = require("body-parser");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://hitarthsingh2201:twkpqcfIGwwWW2lF@cluster0.j2h4vgp.mongodb.net/")
        .then(() => console.log("connection with Database established successfully"))
        .catch((err) => console.log("ERR_OCCURED_CONNECTING_DB",err))


app.use(jobRoutes);

app.listen(10000 , () => console.log("Server is up and running at 8080"));
