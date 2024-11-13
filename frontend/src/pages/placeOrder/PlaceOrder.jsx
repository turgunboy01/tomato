import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="place_order">
      <div className="place_order_left">
        <p className="place_order_title">Delivery Indormation</p>
        <div className="multi_fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Enter Email" />
        <input type="text" placeholder="Street" />
        <div className="multi_fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi_fields">
          <input type="text" placeholder="ip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place_order_right">
        <div className="cart_total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Delivery Free</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Total</p>
              <p>${getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENTS</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
