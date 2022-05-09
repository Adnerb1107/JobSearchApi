const { connection } = require("./config/db");
const users = require("./routes/users");
const express = require("express");
const app = express();
app.use(express.json());
connection();

// routes
users(app);

app.listen(3008, () => {
  console.log(`Server running on port 3008`);
});
