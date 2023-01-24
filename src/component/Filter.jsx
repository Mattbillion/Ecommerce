import "../Style/Filter.css";
import React, { useEffect, useMemo, useState} from 'react';
import { data } from "../Utility/data";


export default function Filter(props) {

  const {handleCategories} = props;

  return (
    <div className="filter-map">
      <h1>Popular Items</h1>
      <button onClick={handleCategories}>All</button>
      <button onClick={handleCategories}>CPU</button>
      <button onClick={handleCategories}>Motherboards</button>
      <button onClick={handleCategories}>Graphic card</button>
      <button onClick={handleCategories}>Phone</button>
      <button onClick={handleCategories}>Laptop</button>
    </div>
  )
}