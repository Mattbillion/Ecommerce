import "../Style/Filter.css";
import React, { useEffect, useMemo, useState} from 'react';
import { data } from "../Utility/data";


export default function Filter() {
  const categories = ["All", "Cameras", "Laptop", "Gears", "Sales"];
  

  function onFilterValueChanged() {
    {data.filter((item) => {
      return console.log(item.category === 1);
    })}
  }

  return (
    <div className="filter-map">
      <h1>Popular Items</h1>
      <ul className="list">
        {categories.map((category, index) => (
            <button key={index} value={index} onClick={onFilterValueChanged}>{category}</button>
        ))}
      </ul>
    </div>
  )
}