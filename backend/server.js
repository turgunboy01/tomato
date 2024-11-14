import express from "express";
import cors from "cors";
import foodRoute from "./routes/food.route.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";
import "dotenv/config.js";
import cartRoute from "./routes/cart.route.js";

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());
connectDB();
app.use("/uploads", express.static("uploads")); // Rasm yuklangan fayllarga to‘g‘ridan-to‘g‘ri kirish

// Asosiy marshrutlar
app.use("/api/food", foodRoute);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRoute);

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
