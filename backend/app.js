import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Nexora is running",
  });
});

app.use("/api/auth", router);


export default app;
