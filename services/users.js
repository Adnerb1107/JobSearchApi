const UserModel = require("../models/user");

class Users {
  async getAll() {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error) {
      console.log(error);
    }
  }
  async getByEmail(email) {
    try {
      const user = await UserModel.findOne({ email });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async create(data) {
    try {
      const newUser = await UserModel.create(data);
      return newUser;
    } catch (error) {
      return {
        err: true,
        message: error.message,
      };
    }
  }
  async update(id, data) {
    try {
      const user = await UserModel.findByIdAndUpdate(id, data, { new: true });
      return user;
    } catch (error) {}
  }
  async delete(id) {
    try {
      const user = await UserModel.findByIdAndDelete(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Users;
