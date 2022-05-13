const EnterpriseModel = require("../models/enterprise");
class Enterprise {
  async getAll() {
    try {
      const enterprise = await EnterpriseModel.find().populate("jobs");
      return enterprise;
    } catch (error) {
      console.log(error);
    }
  }
  async getByName(id) {
    try {
      const enterprise = await EnterpriseModel.find({ _id: id }).populate(
        "jobs"
      );
      return enterprise;
    } catch (error) {
      console.log(error);
    }
  }
  async create(data) {
    try {
      const newEnterprise = await EnterpriseModel.create(data);
      return newEnterprise;
    } catch (error) {
      return {
        err: true,
        message: error.message,
      };
    }
  }
  async update(id, data) {
    try {
      const enterprise = await EnterpriseModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return enterprise;
    } catch (error) {}
  }
  async delete(id) {
    try {
      const enterprise = await EnterpriseModel.findByIdAndDelete(id);
      return enterprise;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Enterprise;
