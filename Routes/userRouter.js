const express = require("express");
const userRouter = express.Router();
const {
  getProfile,
  updateProfile,
  deleteProfile,
} = require("../Controllers/userController");
const { getAllUSer } = require("../Controllers/AdminController");
userRouter.get("/profile/:id", getProfile);
userRouter.put("/profile/:id", updateProfile);
userRouter.delete("/profile/:id", deleteProfile);

userRouter.get("/users", getAllUSer);
userRouter.get("/users/:id", (req, res) => {
  res.send("get user");
});

module.exports = userRouter;
