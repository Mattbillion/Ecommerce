import "../Style/Filter.css";
import React, { useEffect, useMemo, useState} from 'react';
import { data } from "../Utility/data";


export default function Filter() {
  const filter = ["All", "Cameras", "Laptop", "Gears", "Sales"];

  const [itemList, setItemList] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setItemList(data);
  }, []);

  
function getFilteredList() {
  if(!selectedCategory) {
    return itemList;
  }
  return itemList.filter((item) => item.category === selectedCategory);
}

var filteredList = useMemo(getFilteredList, [selectedCategory, itemList]);


function handleCategoryChange(event) {
  console.log(event.target.value);
  setSelectedCategory(event.target.value);
}

  return (
    <div className="filter-map">
      <h1>Popular Items</h1>
      <ul className="list">
        {filter.map((category, index) => (
            <button key={index} value={index} onClick={handleCategoryChange}>{category}</button>
        ))}
      </ul>
    </div>
  )
}