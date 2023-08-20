const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

require("./Config/Database");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server working on:   http://localhost:${PORT}`);
});
