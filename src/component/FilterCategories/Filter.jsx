import React from "react";
import "../FilterCategories/Filter.css";
export default function Filter(props) {
  const { handleCategories } = props;

  return (
    <div className="filter_container">
      <h1 className="filter_title">Popular products</h1>
      <ul className="filter_btn_group">
        <button className="filter_btn" onClick={handleCategories}>
          All
        </button>
        <button className="filter_btn" onClick={handleCategories}>
          Cameras
        </button>
        <button className="filter_btn" onClick={handleCategories}>
          Motherboards
        </button>
        <button className="filter_btn" onClick={handleCategories}>
          Tablets
        </button>
        <button className="filter_btn" onClick={handleCategories}>
          Mouse
        </button>
        <button className="filter_btn" onClick={handleCategories}>
          Sale
        </button>
      </ul>
    </div>
  );
}
