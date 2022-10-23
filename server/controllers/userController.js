const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require(`../models.js/users`);
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      fullName: user.fullName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  console.log('works');
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password)))
    res.json({
      _id: user.id,
      fullName: user.fullName,
      email: user.email,
      token: generateToken(user._id),
    });
  else{
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
