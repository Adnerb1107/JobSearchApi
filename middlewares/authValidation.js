const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/index");
function authValidation(req, res, next) {
  const bearer = req.headers.authorization;
  if (bearer && bearer.startsWith("Bearer")) {
    const [_, token] = bearer.split(" ");
    if (token) {
      try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        return next();
      } catch ({ name, message }) {
        return res.status(403).json({
          error: true,
          message,
          type: name,
        });
      }
    }
  }
  return res.status(403).json({
    error: true,
    message: "Insufficient permissions",
  });
}
function userValidation(...rolesAllowed) {
  return (req, res, next) => {
    const { role } = req.user;
    if (rolesAllowed.includes(role) && role) {
      next();
    } else {
      return res.status(403).json({
        message: "User not allowed",
      });
    }
  };
}

module.exports = {
  authValidation,
  userValidation,
};
