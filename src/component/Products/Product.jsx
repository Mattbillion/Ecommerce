import '../../component/Products/Product.css'

export default function Products(props) {
  return (
    <div className="products-container">
        <div className="cart-top">
            <img src={props.image} alt="product-image" />
        </div>
        <div className="cart-bottom">
            <h1 className="title">{props.name}</h1>
            <p className="instance">{props.instance}</p>
            <div className="price">{props.price}</div>
        </div>
    </div>
  )
}