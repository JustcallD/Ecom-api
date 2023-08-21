const express = require("express");
const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send("get route");
});

module.exports = authRouter;
