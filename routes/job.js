const express = require("express");
const {
  authValidation,
  userValidation,
} = require("../middlewares/authValidation");
const JobService = require("../services/job");

function job(app) {
  const router = express.Router();
  const jobService = new JobService();
  app.use("/api/job", router);
  router.get("/", async (_, res) => {
    const Job = await jobService.getAll();
    return res.json(Job);
  });
  router.post(
    "/",
    authValidation,
    userValidation("empleador"),
    async (req, res) => {
      const Job = await jobService.create(req.body);
      await jobService.addEnterpriseToJobs(req.body.enterprise, Job);
      return res.json(Job);
    }
  );
  router.put(
    "/:id",
    authValidation,
    userValidation("admin"),
    async (req, res) => {
      const Job = await jobService.update(req.params.id, req.body);
      return res.json(Job);
    }
  );
  router.delete(
    "/:id",
    authValidation,
    userValidation("admin"),
    async (req, res) => {
      const Job = await jobService.delete(req.params.id);
      return res.json(Job);
    }
  );
}
module.exports = job;
