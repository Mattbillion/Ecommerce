import HeroSection from "../HeroSection";
import Banner from "../Banner/Banner";
import React, { useState } from "react";
import Filter from "../FilterCategories/Filter";
import ProductList from "../Cart/ProductList";
import Newsfeed from "../Newsfeed/Newsfeed";
import BrandLogos from "./BrandLogos";
export default function Main(data) {
  const [newProductList, setProductList] = useState(data);

  function handleCategories(event) {
    if (event.target.innerText === "All") {
      console.log("clicled");
      setProductList(data);
    } else {
      var filteredValue = data.filter(
        (item) => item.category === event.target.innerText
      );
      setProductList(filteredValue);
    }
  }
  return (
    <div>
      <HeroSection />
      <Filter handleCategories={handleCategories} />
      <ProductList filter={newProductList} />
      <Banner />
      <Newsfeed />
      <BrandLogos />
    </div>
  );
}
