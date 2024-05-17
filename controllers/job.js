const JobModel = require("../models/job");

const createJob = async (req, res) => {
    const jobObj = req.body;
    const newJob = new JobModel(jobObj);
    const newlyJobSaved = await newJob.save()

    res.json({
        success: true,
        message: "Job created successfully",
        jobId: newlyJobSaved._id,
    });
};

const listJob = async (req, res) => {
    // const jobList = JobModel.find();
    // console.log(jobList);

    const { minSalary, maxSalary } = req.query.minSalary;
    const jobList = await JobModel.find({
        $and: [
            {salary: { $gte: minSalary }},
            {salary: { $lte: maxSalary }}
        ]
        // salary : {
        //     $gt : minSalary,
        // }
    })
    res.json({
        success: true,
        message: "List job api",
        results: jobList,
    });
};

const updateJob = async (req, res) => {
    const jobId = req.params.id;
    console.log(jobId);
    console.log(req.body)
    // JobModel.findByIdAndUpdate(jobId , req.body);

    const findObj = {
        title : "Update Softwae"
    }
    const updateObj = {
        age :50
    };

    await JobModel.findOneAndUpdate(findObj , updateObj) // It will update the first matcing record
    await JobModel.updateMany(findObj, updateObj) // it will update all matching records

    res.json({
        success: true,
        message: "Dummy update job api"
    });
};

const deleteJob = async (req, res) => {

    const jobId = req.params.id 

    const findObj = {
        age : 0
    }

    await JobModel.findByIdAndDelete(jobId)

    await JobModel.findOneAndDelete(findObj)
    // JobModel.deleteMany()
    res.json({
        success: true,
        message: "Dummy delete job api"
    });
};

const jobController = {
    createJob,
    listJob,
    updateJob,
    deleteJob
};

module.exports = jobController;