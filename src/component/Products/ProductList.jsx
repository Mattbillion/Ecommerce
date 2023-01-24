import "../../component/Products/ProductList.css"
import Product from './Product';
import { data } from '../../Utility/data';
export default function ProductList(props) {

    const {filter} = props;



    return(
        <div className="ProductList-map">
            {filter.map((data, index) => (
                <div className="map-wrap" key={index}>
                    <Product image={data.image} name={data.name} instance={data.instance} price={data.price}/>
                </div>
            ))}
        </div>
    )
}