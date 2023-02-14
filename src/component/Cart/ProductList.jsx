import React from "react";
import Cart from "./Cart";
import "../Cart/ProductList.css";

export default function ProductList(props) {
  const { filter } = props;
  console.log("from productlist" ,filter);

  return (
    <div className="productList_container">
      {filter && filter.map((item, index) => (
        <Cart key={index} image={item.image} title={item.name} instance={item.instance} price={item.price}/>
      ))}
      
    </div>
  );
}
