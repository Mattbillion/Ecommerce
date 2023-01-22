import "../../component/Products/ProductList.css"
import { data } from '../../Utility/data';
import Product from './Product';
export default function ProductList(props) {
    return(
        <div className="ProductList-map">
            {data.map((data, index) => (
                <div className="map-wrap" key={index}>
                    <Product image={data.image} name={data.name} instance={data.instance} price={data.price}/>
                </div>
            ))}
        </div>
    )
}