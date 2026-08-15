import express from "express";
import { registerUser } from "../controllers/authController.js";
import {
  validateRequest,
  registerValidation,
} from "../middleware/authValidation.js";

const router = express.Router();

router.post("/register", registerValidation, validateRequest, registerUser);

export default router;
