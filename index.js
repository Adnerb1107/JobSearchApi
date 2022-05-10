const express = require("express");
const { connection } = require("./config/db");
const users = require("./routes/users");
const auth = require("./routes/auth");
const app = express();
app.use(express.json());
connection();

// routes
users(app);
auth(app);

app.listen(3008, () => {
  console.log(`Server running on port 3008`);
});
