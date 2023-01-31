import React from "react";
import "../Newsfeed/Newsfeed.css";
export default function Newsfeed() {
  return (
    <div className="newsfeed_container">
      <div className="special_product">
        <h1 className="special_product_label">Special product</h1>
        <img
          src="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45_PDP_Ecom-Gallery-B02.png/_jcr_content/renditions/cq5dam.web.320.320.png"
          alt="img"
        />
        <h1 className="special_product_name">JBL bar 2.1 deep bass</h1>
        <p className="special_product_price">$11,70</p>
        <p className="special_product_desc">
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </p>
        <div className="add_to_cart">
          <button className="add_to_cart_btn">Add to cart</button>
          <img src="./assets/cart.png" />
        </div>
      </div>

      <div className="news_feed_right">
        <div className="feed">
          <img
            className="feed_image"
            src="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/earbuds_500/product_silo_images/seb_product_slideshow_black_ec_hero_web.png/_jcr_content/renditions/cq5dam.web.320.320.png"
            alt="image"
          />
          <div className="feed_text_container">
            <h1 className="product_date">22 oct 2021</h1>
            <h1 className="feed_title"> Who avoids a pain that produces?</h1>
            <p className="feed_desc">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
            <p className="feed_publisher">By spacing tech</p>
          </div>
        </div>

        <div className="feed">
          <img
            className="feed_image"
            src="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/s1_pro_system/product_silo_images/Chibi-silo1-1200x1022-17-BOSE-064-121417.psd/jcr:content/renditions/cq5dam.web.320.320.png"
            alt="image"
          />
          <div className="feed_text_container">
            <h1 className="product_date">22 oct 2021</h1>
            <h1 className="feed_title"> Who avoids a pain that produces?</h1>
            <p className="feed_desc">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
            <p className="feed_publisher">By spacing tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}
