import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title"> Delivary Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="firstName" />
          <input type="text" placeholder="LastName" />
        </div>

        <input type="text" placeholder="Email addres" />
        <input type="text" placeholder="Street" />
     

      <div className="multi-fields">
        <input type="text" placeholder="city" />
        <input type="text" placeholder="State" />
      </div>

      <div className="multi-fields">
        <input type="text" placeholder="Zip code" />
        <input type="text" placeholder="Country" />
      </div>
      <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
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
              <p>{getTotalCartAmount() ===0 ?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detailes">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
