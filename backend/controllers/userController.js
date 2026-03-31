import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "all fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "both password does't match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const profilePic = "https://api.dicebear.com/9.x/thumbs/svg";

    const newUser = await User.create({
      fullName,
      username,
      password: hashedPassword,
      profilePhoto: profilePic,
      gender,
    });
    return res.status(201).json({
      message: "User registered successfully",
      data: newUser,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(404).json({
        message: "both fields are required",
      });
    }
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        message: "incorrect username or password",
        success: false,
      });
    }
    let isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect username or password",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        _id: user._id,
        username: user.username,
        fullName: user.fullName,
        profilePhoto: user.profilePhoto,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logged out succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOtherUsers = async (req, res) => {
  try {
    const loggedInUserId = req.id;
    const getOtherUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    return res.status(200).json(getOtherUsers);
  } catch (error) {
    console.log(error);
  }
};
