import fs from "fs";
import foodModel from "../models/food.model.js";

// Add food to the database

const addFood = async (req, res) => {
  const image_filename = req.file.filename;

  // Create a new food item
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    // Save the food item to the database
    await food.save();
    res.status(200).json({ success: true, message: "Food Added" });
  } catch (error) {
    console.error("Error adding food:", error); // Log the error details
    res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};

//  all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Error" });
  }
};

// remove food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
