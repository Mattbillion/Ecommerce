import Filter from "../Filter";
import HeroSection from "../HeroSection";
import Product from "../Products/Product";
import { data } from "../../Utility/data"; 
import ProductList from "../Products/ProductList";
import Banner from "../Banner/Banner";
export default function  Main() {
    return (
        <div>
        <HeroSection />
        <Filter />
        <ProductList />
        <Banner />
        </div>
    )
}