const User = require("../Models/User");

const signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exist " });
    }

    const newUser = await User.create({
      email: email,
      password: password,
      username: username,
    });
    res.status(201).json({ message: "User registered successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "credentials required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const { Password, ...others } = user._doc;

    // const { password, ...others } = user._doc;

    // const token = generateToken(user);

    res.status(200).json({ message: "Login successful", ...others });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { signUp, login };
