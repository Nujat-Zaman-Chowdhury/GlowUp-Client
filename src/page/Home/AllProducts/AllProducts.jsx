import { useEffect, useState } from "react";
import ProductCard from "../../../components/Navbar/ProductCard/ProductCard";
import Sidebar from "../../../components/Navbar/Sidebar/Sidebar";
import axios from "axios";


const AllProducts = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = async()=>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/all-products`,{withCredentials:true})
        // console.log(data);
        setProducts(data);
    }
    return (
        <div className="container mx-auto flex gap-6">
            {/* sidebar */}
            <Sidebar/>
            
            <div className="grid grid-cols-3 gap-3">
            {
                products.map(product=><ProductCard key={product._id} product={product}/>)
            }
            </div>
            
        </div>
    );
};

export default AllProducts;