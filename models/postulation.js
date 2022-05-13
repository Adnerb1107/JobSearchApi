const { mongoose } = require("../config/db");
const Schema = mongoose.Schema;
const PostulationSchema = new Schema({
  profile: String,
  salaryExpec: Number,
  profile: String,
  linkedInAccount: String,
  repositoryAccount: String,
  linkPortfolio: String,
  linkCV: String,
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: "Job",
  },
});
const PostulationModel = mongoose.model("Postulation", PostulationSchema);
module.exports = PostulationModel;
