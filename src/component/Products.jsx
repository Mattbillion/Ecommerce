import "../Style/product.css"


export default function Products(props) {
  return (
    <div className="products-container">
      <div className="items">
        <div className="item">
          <div className="cart-top">
            <img src={props.image} alt="post-image"/>
          </div>
    
          <div className="cart-bottom">
            <div className="left">
              <div className="product-name">
                <h1>{props.name}</h1>
              </div>
              <div className="product-instance">
                <p>{props.instance}</p>
              </div>
              <div className="product-price">
                <h6>{props.price}</h6>
              </div>
            </div>
      
            <div className="right">
            <div className="cart">
              <img src="./assets/cart.png" alt="" />
            </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}