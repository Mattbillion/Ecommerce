import HeroSection from "../HeroSection";
import Banner from "../Banner/Banner";
import React, { useEffect, useState } from "react";
import Filter from "../FilterCategories/Filter";
import ProductList from "../Cart/ProductList";
import Newsfeed from "../Newsfeed/Newsfeed";
import BrandLogos from "./BrandLogos";
export default function Main(props) {
  const { data } = props;
  console.log("from main", data);
  const [filteredData, setFilteredData] = useState(data);
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    switch (selected) {
      case "All":
        setFilteredData(data);
        break;
        
      case "Camera":
        setFilteredData(data && data.filter((item) => item.category === "Camera"));
        break;

      case "Motherboard":
        setFilteredData(data);
        break;

      default:
    }
  }, [selected]);

  function handleCategories(event) {
    if (event.target.innerText === "All") {
      setFilteredData(data);
    } else {
      var filteredValue =
        data && data.filter((item) => item.category === event.target.innerText);
      setFilteredData(filteredValue);
    }
  }


  return (
    <div>
      <HeroSection />
      {/* <Filter handleCategories={handleCategories} />
       */}
      <button onClick={() => setSelected("All")}>All</button>
      <button onClick={() => setSelected("Camera")}>Camera</button>
      <button onClick={() => setSelected("Motherboard")}>Motherboard</button>
      <button onClick={() => setSelected("Graphic card")}>Graphic card</button>
      <ProductList filter={filteredData} />
      <Banner />
      <Newsfeed />
      <BrandLogos />
    </div>
  );
}
