import React from "react";
import "../Cart/Cart.css";
export default function Cart(props) {
  return (
    <div className="cart_container">
      <img className="cart_img" src={props.image} alt="" />
      <div className="cart_bottom">
        <h1 className="cart_title">{props.title}</h1>
        <p className="cart_instance">{props.instance}</p>
        <div className="purchase">
          <p className="cart_price">{props.price}</p>
          <button className="add_card">Сагслах</button>
        </div>
      </div>
    </div>
  );
}
