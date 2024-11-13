import React, { useContext, useState } from "react";
import "./foodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addCart, removeItem } = useContext(StoreContext);

  // console.log(cartItems, id);

  return (
    <div className="foodItem">
      <div className="foodItemImgContainer">
        <img src={image} className="foodItem_Image" alt="" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() => addCart(id)}
            alt="add"
            className="add"
          />
        ) : (
          <div className="foodItem_counter">
            <img
              onClick={() => removeItem(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="foodItem_info">
        <div className="foodItem_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food_item_description">{description}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
