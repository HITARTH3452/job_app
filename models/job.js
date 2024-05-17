const mongoose = require("mongoose");

const jobSchema = {
    title : {
        type : String,
        // required : true,
        unique  : true,
    },
    description : {
        type : String,
    },
    company : {
        type : String,
    },
    location : {
        type : String,
    },
    salary : {
        type : Number,
    },
};

const JobModel = mongoose.model("jobs" , jobSchema);
module.exports = JobModel;