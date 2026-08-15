import express from "express";

import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  registerValidation,
  loginValidation,
  validateRequest,
} from "../middleware/authValidation.js";

const router = express.Router();

// REGISTER
router.post("/register", registerValidation, validateRequest, registerUser);

// LOGIN
router.get("/login", loginValidation, validateRequest, loginUser);

// getme
router.get("/me", authMiddleware, getMe);

export default router;
