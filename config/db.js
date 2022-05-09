const mongoose = require("mongoose");
const { dbHost, dbName, dbPassword, dbUsername } = require("../config/index");
const connection = async function () {
  const conn_URI = `mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
  const conn = await mongoose.connect(conn_URI);
  console.log("db connected");
};
module.exports = {
  connection,
  mongoose,
};
