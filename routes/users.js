const express = require("express");
const {
  authValidation,
  userValidation,
} = require("../middlewares/authValidation");
const UserService = require("../services/users");

function users(app) {
  const router = express.Router();
  const userService = new UserService();

  app.use("/api/users", router);
  router.get("/", authValidation, userValidation("admin"), async (_, res) => {
    const users = await userService.getAll();
    return res.json(users);
  });
  router.post(
    "/",
    authValidation,
    userValidation("admin"),
    async (req, res) => {
      const users = await userService.create(req.body);
      return res.json(users);
    }
  );
  router.put(
    "/:id",
    authValidation,
    userValidation("admin"),
    async (req, res) => {
      const user = await userService.update(req.params.id, req.body);
      return res.json(user);
    }
  );
  router.delete(
    "/:id",
    authValidation,
    userValidation("admin"),
    async (req, res) => {
      const user = await userService.delete(req.params.id);
      return res.json(user);
    }
  );
}
module.exports = users;
