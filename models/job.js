const { mongoose } = require("../config/db");
const Schema = mongoose.Schema;
const jobSchema = new Schema({
  title: String,
  description: String,
  enterprise: {
    type: Schema.Types.ObjectId,
    ref: "Enterprise",
  },
  salary: Number,
  modality: {
    type: String,
    enum: ["In office", "Remote", "Hybrid"],
  },
  startPostulation: {
    type: Date,
    default: new Date(),
  },
  endPostulations: Date,
  requirements: Array,
  level: {
    type: String,
    enum: ["Trainee", "Junior", "Semi senior", "Senior", "Tech Lead"],
  },
  country: String,
  allowOtherCountry: Boolean,
  recruiter: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  candidates: [
    {
      type: Schema.Types.ObjectId,
      ref: "Postulation",
    },
  ],
});
const JobSchema = mongoose.model("Job", jobSchema);
module.exports = JobSchema;
