const { mongoose } = require("../config");
const { Schema } = mongoose;
const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ["postulante", "empleador", "admin"],
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
