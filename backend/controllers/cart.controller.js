import userModel from "../models/user.model.js";

const addToCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData || {};

    // Mahsulot miqdorini yangilash
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    // Yangilangan `cartData`ni saqlash
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error adding to cart" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData || {};

    // Mahsulotni `cartData`dan olib tashlash yoki kamaytirish
    if (cartData[req.body.itemId]) {
      cartData[req.body.itemId] -= 1;
      if (cartData[req.body.itemId] <= 0) {
        delete cartData[req.body.itemId];
      }
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error removing from cart" });
  }
};

const getCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error fetching cart data" });
  }
};

export { addToCart, removeFromCart, getCart };
