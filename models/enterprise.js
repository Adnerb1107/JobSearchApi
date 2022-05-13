const { mongoose } = require("../config/db");
const Schema = mongoose.Schema;
const enterpriseSchema = new Schema({
  name: String,
  address: String,
  country: String,
  offices: Array,
  recruiters: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});
const EnterpriseModel = mongoose.model("Enterprise", enterpriseSchema);
module.exports = EnterpriseModel;
