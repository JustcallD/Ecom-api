const express = require("express");
const userRouter = express.Router();
const {
  getProfile,
  updateProfile,
  deleteProfile,
} = require("../Controllers/userController");
const { getUSerByID, getAllUSer } = require("../Controllers/AdminController");
userRouter.get("/profile/:id", getProfile);
userRouter.put("/profile/:id", updateProfile);
userRouter.delete("/profile/:id", deleteProfile);

userRouter.get("/users", getAllUSer);
userRouter.get("/user/:id", getUSerByID);

module.exports = userRouter;
