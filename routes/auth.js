const express = require("express");
const AuthService = require("../services/auth");
function auth(app) {
  const router = express.Router();
  const authService = new AuthService();

  app.use("/api/auth", router);

  router.post("/login", async (req, res) => {
    const result = await authService.login(req.body);
    return res.json(result);
  });

  router.post("/signup", async (req, res) => {
    const response = await authService.signup(req.body);
    return res.json(response);
  });
}
module.exports = auth;
