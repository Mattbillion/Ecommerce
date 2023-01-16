import Products from "./Products"
import {data} from "../Utility/data"; 
import "../Style/productSection.css"
export default function ProductSection(props) {
  return (
    
    <div className="Product-map">
      {data.map((d, index) => (
        <div className="map-wrap" key={index}>
          <Products image={d.image} name={d.name} instance={d.instance} price={d.price}/>
        </div>
      ))}
    </div>
  )
}