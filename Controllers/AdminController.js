const User = require("../Models/User");

const getAllUSer = async (req, res) => {
  try {
    const allUsers = await User.find().sort({ _id: -1 });
    return res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching users." });
  }
};

module.exports = {
  getAllUSer,
};
