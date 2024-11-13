import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/food.controller.js";
import multer from "multer";

const foodRoute = express.Router();

// image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Ovqat qo'shish marshruti
foodRoute.post("/add", upload.single("image"), addFood);
foodRoute.get("/list", listFood);  
foodRoute.post("/remove", removeFood);

export default foodRoute;
