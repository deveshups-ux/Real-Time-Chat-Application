import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "all fields are required" });
    }
    const cleanUsername = username.trim().toLowerCase();
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
        success: false,
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "both password does't match" });
    }

    const user = await User.findOne({
      username: cleanUsername,
    });
    if (user) {
      return res.status(400).json({ message: "username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const profilePic = `https://i.pravatar.cc/150?img=${Math.floor(
      Math.random() * 70,
    )}`;

    const newUser = await User.create({
      fullName,
      username: cleanUsername,
      password: hashedPassword,
      profilePhoto: profilePic,
      gender,
    });
    return res.status(201).json({
      message: "User registered successfully",
      data: {
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePhoto: newUser.profilePhoto,
        gender: newUser.gender,
      },
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: "both fields are required",
      });
    }
    const cleanUsername = username.trim().toLowerCase();

    let user = await User.findOne({
      username: cleanUsername,
    });
    if (!user) {
      return res.status(400).json({
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

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        _id: user._id,
        username: user.username,
        fullName: user.fullName,
        profilePhoto: user.profilePhoto,
        success: true,
      });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const logout = (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        message: "logged out successfully",
        success: true,
      });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
  return res.status(500).json({
    message: "Internal server error",
    success: false,
  });
};

export const getOtherUsers = async (req, res) => {
  try {
    const loggedInUserId = req.id;
    const getOtherUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    return res.status(200).json(getOtherUsers);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
