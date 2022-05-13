const express = require("express");
const {
  authValidation,
  userValidation,
} = require("../middlewares/authValidation");
const EnterpriseService = require("../services/enterprise");
function enterprise(app) {
  const router = express.Router();
  const enterpriseService = new EnterpriseService();
  app.use("/api/enterprise", router);
  router.get("/", authValidation, async (_, res) => {
    const enterprise = await enterpriseService.getAll();
    return res.json(enterprise);
  });
  router.get("/:id", authValidation, async (req, res) => {
    const enterprise = await enterpriseService.getByName(req.params.id);
    return res.json(enterprise);
  });
  router.post(
    "/",
    authValidation,
    userValidation("admin"),
    async (req, res) => {
      const enterprise = await enterpriseService.create(req.body);
      return res.json(enterprise);
    }
  );
  router.put(
    "/:id",
    authValidation,
    userValidation("admin"),
    async (req, res) => {
      const enterprise = await enterpriseService.update(
        req.params.id,
        req.body
      );
      return res.json(enterprise);
    }
  );
  router.delete(
    "/:id",
    authValidation,
    userValidation("admin"),
    async (req, res) => {
      const enterprise = await enterpriseService.delete(req.params.id);
      return res.json(enterprise);
    }
  );
}
module.exports = enterprise;
