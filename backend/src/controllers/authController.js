import userModel from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// ===============================
// REGISTER USER
// ===============================

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = new userModel({
      name,
      email,
      password,
    });

    await user.save();

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    return res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.log("REGISTER ERROR:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// ===============================
// LOGIN USER
// ===============================

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    return res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.log("LOGIN ERROR:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await userModel.findById(req.user).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log("GET ME ERROR:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { registerUser, loginUser, getMe };
