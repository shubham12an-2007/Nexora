import express from "express";

import { registerUser, loginUser } from "../controllers/authController.js";

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

export default router;
