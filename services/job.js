const JobModel = require("../models/job");
const EnterpriseModel = require("../models/enterprise");

class Jobs {
  async getAll() {
    try {
      const jobs = await JobModel.find()
        .populate("enterprise")
        .populate("recruiter");
      return jobs;
    } catch (error) {
      console.log(error);
    }
  }
  async getByName(name) {
    try {
      const job = await JobModel.findOne({ name });
      return job;
    } catch (error) {
      console.log(error);
    }
  }
  async create(data) {
    try {
      const newjob = await JobModel.create(data);
      return newjob;
    } catch (error) {
      return {
        err: true,
        message: error.message,
      };
    }
  }
  async update(id, data) {
    // QUIEN CREO EL TRABAJO
    try {
      const job = await JobModel.findByIdAndUpdate(id, data, { new: true });
      return job;
    } catch (error) {
      console.log(error);
    }
  }
  async delete(id) {
    try {
      const job = await JobModel.findByIdAndDelete(id);
      return job;
    } catch (error) {
      console.log(error);
    }
  }
  async addEnterpriseToJobs(id, job) {
    const empresa = await EnterpriseModel.findById(id);
    empresa.jobs = empresa.jobs.concat(job._id);
    await empresa.save();
  }
}
module.exports = Jobs;
