import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";

export const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart ,getTotalCartAmount} =
    useContext(StoreContext);


    const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-item-title cart-item-item">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detailes">
              <p>Sub-Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detailes">
              <p>Deviver Free</p>
              <p>{getTotalCartAmount()===0 ? 0 :2}</p>
            </div>
            <hr />
            <div className="cart-total-detailes">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() +2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/oredr")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have a promo code Enter it here</p>
            <div className="cart-promocord-input">
              <input type="text" placeholder="promocode" />
              <button> submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
