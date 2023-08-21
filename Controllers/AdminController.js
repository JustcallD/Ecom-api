const User = require("../Models/User");

const getAllUSer = async (req, res) => {
  try {
    const allUsers = await User.find().sort({ _id: -1 });
    return res.status(200).json(allUsers);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while fetching users." });
  }
};
const getUSerByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while fetching users." });
  }
};

module.exports = {
  getAllUSer,
  getUSerByID,
};
