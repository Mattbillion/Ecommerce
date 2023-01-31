import axios from "axios";
import React, {useState} from 'react';
const newProduct = {
  name: "Iphone 17",
  price: 210000,
};
export default function Middle() {
  const [singleProd, setSingleProd] = useState(undefined);

  const getSingleProdHandler = () => {
    fetch("http://localhost:2021/product/1")
      .then((res) => res.json())
      .then((res) => setSingleProd(res))
      .catch((err) => {
        console.log("Error: ", err.message);
      });
  };
  function addProductHandler(product) {
    axios.post("http://localhost:2021/add", product);
  }

  function deleteProductHandler(id) {
    axios.delete(`http://localhost:2021/product/${id}`);
  }
  return (
    <div style={{ fontSize: "30x" }}>
      <button onClick={getSingleProdHandler}>Get single</button>
      {singleProd && <p>{singleProd.name}</p>}
      {/* {cannot read "name" property of undefined} */}
      <button onClick={() => addProductHandler(newProduct)}>
        Add new Product
      </button>
      <button onClick={() => deleteProductHandler("2")}>Delete product</button>
    </div>
  );
}
