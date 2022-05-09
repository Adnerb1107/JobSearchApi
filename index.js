const { connection } = require("./config/db");
const express = require("express");
const app = express();
app.use(express.json());
connection();

app.listen(3008, () => {
  console.log(`Server running on port 3008`);
});
