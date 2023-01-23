import Filter from "../Filter";
import HeroSection from "../HeroSection";
import { data } from "../../Utility/data"; 
import Banner from "../Banner/Banner";
import Productlist from '../Products/ProductList';
import React, { useState } from "react";
export default function  Main() {

    const [newProductList, setProductList] = useState(data);

    

    return (
        <div>
        <HeroSection />
        <Filter />
        <Productlist />
        <Banner/>
        </div>
    )
}