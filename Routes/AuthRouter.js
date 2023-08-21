const express = require("express");
const authRouter = express.Router();

const { signUp, login } = require("../Controllers/AuthController");

authRouter.get("/", (req, res) => {
  res.send("get route");
});

authRouter.post("/signup", signUp);
authRouter.post("/login", login);

module.exports = authRouter;
