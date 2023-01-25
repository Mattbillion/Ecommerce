import Filter from "../Filter";
import HeroSection from "../HeroSection";
import { data } from "../../Utility/data"; 
import Banner from "../Banner/Banner";
import Productlist from '../Products/ProductList';
import React, { useState } from "react";
import ProductDetail from "../Products/ProductDetail";
import { json } from "react-router-dom";
import Backend from "../Axios/Backend";
import axios  from "axios";
import { useEffect } from "react";
export default function  Main() {



    const [newProductList, setProductList] = useState(data);

    const [itemData, setItemData ] = useState();

    useEffect(() => {
      try {
        axios
        .get('http://localhost:2020/products')
        .then((res) => {
          console.log(res.data);
          setItemData(res.data)});
        } catch (error) {
          console.log(error.message);
        }
    }, []);


      
    

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
        {/* <ProductDetail /> */}
        <Backend data={itemData}/>
        </div>
    )
}