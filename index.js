require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
app.listen(3008, () => {
  console.log(`Server running on port 3008`);
});
