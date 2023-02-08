import React from "react";
import Cart from "./Cart";
import "../Cart/ProductList.css";

export default function ProductList(props) {
  const { filter } = props;
  console.log("from", props)

  return (
    <div className="productList_container">
      {filter.map((item, index) => (
        <Cart image={item.image} title={item.name} instance={item.instance} price={item.price}/>
      ))}
    </div>
  );
}
