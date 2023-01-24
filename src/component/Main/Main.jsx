import Filter from "../Filter";
import HeroSection from "../HeroSection";
import { data } from "../../Utility/data"; 
import Banner from "../Banner/Banner";
import Productlist from '../Products/ProductList';
import React, { useState } from "react";
import ProductDetail from "../Products/ProductDetail";
export default function  Main() {

    const [newProductList, setProductList] = useState(data);

  function handleCategories(event) {
    if(event.target.innerText === "All"){
      setProductList(data)  
    }else{
      var filteredValue = data.filter((item) => item.category === event.target.innerText);
      setProductList(filteredValue);
    }
  }
    return (
        <div>
        {/* <HeroSection />
        <Filter setFilter={setProductList} data={newProductList} handleCategories={handleCategories}/>
        <Productlist filter={newProductList}/>
        <Banner/> */}
        <ProductDetail />
        </div>
    )
}