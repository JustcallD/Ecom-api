const User = require("../Models/User");

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateProfile = async (req, res) => {};

const deleteProfile = async (req, res) => {};

// const Profile = async (req, res)=>{

// }

module.exports = {
  getProfile,
  updateProfile,
  deleteProfile,
};
