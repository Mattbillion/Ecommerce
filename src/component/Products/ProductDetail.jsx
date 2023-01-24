import "../Products/ProductDetail.css";
export default function ProductDetail() {
  return (
    <div className="detail-container">
      <div className="inspect-right">
        <img className="left-image" src="../assets/ProductDetailAssets/ConsoleGear.png" alt="" />
      </div>
      <div className="product-detail">
        <h1 className="inspect-title">Play game</h1>
        <h3 className="inspect-price">$11,70</h3>
        <div className="">
          <ul className="star-list">
            <li><img className="stars" src="../assets/ProductDetailAssets/star.png" alt="star"/></li>
            <li><img className="stars" src="../assets/ProductDetailAssets/star.png" alt="star"/></li>
            <li><img className="stars" src="../assets/ProductDetailAssets/star.png" alt="star"/></li>
            <li><img className="stars" src="../assets/ProductDetailAssets/star.png" alt="star"/></li>
            <li><img className="stars" src="../assets/ProductDetailAssets/star.png" alt="star"/></li>
            <h3 className="review-text">No reviews</h3>
          </ul>
        </div>
        <div className="availability">
          <h3>Availability:</h3>
          <div className="inStock">
          <img src="../assets/ProductDetailAssets/Vector.svg"></img>
          <span className="instock-span">In Stock</span>
          <p>Hurry up! only 34 product left in stock!</p>
          </div>
          
          </div>
        
      </div>
    </div>
  )
}