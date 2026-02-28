import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { cookieOptions } from "../utils/cookiOption.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(403).json({ message: "user already exist" });
    }

    const hasedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hasedPassword,
    });
    const token = generateToken(user._id, user.role);

    res
      .cookie("token", token, cookieOptions)
      .status(201)
      .json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "invalid email" });
    }
    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) {
      res.status(401).json({ message: "invalid password" });
    }
    const token = generateToken(user._id, user.role);
    res
      .cookie("token", token, cookieOptions)
      .status(200)
      .json({ message: "login successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "loged out successfully" });
};
