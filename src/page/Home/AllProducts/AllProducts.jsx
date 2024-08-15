import { useEffect, useState } from "react";
import ProductCard from "../../../components/Navbar/ProductCard/ProductCard";
import Sidebar from "../../../components/Navbar/Sidebar/Sidebar";
import axios from "axios";


const AllProducts = () => {
    const [products,setProducts] = useState([]);
    const [count,setCount]=useState(0)
    const [itemsPerPage,setItemsPerPage]=useState(9);
    const [currentPage,setCurrentPage]=useState(1);

    const numberOfPages = Math.ceil(count/itemsPerPage);

    useEffect(()=>{
        getData();
    },[currentPage, itemsPerPage,])

    const getData = async()=>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/all-products`,{withCredentials:true})
        // console.log(data);
        setProducts(data);
    }

    useEffect(()=>{
        const getData = async()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/all-products?page=${currentPage}&size=${itemsPerPage}`,{withCredentials:true})

            setProducts(data); 
        }
        getData();
    },[currentPage, itemsPerPage])

    // get count
    useEffect(()=>{
        const getCount = async()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/products-count?`,{withCredentials:true})
            setCount(data.count)
            setLoading(false)
        }

        getCount();
    },[])
    // console.log(count);


    const pages = [...Array(numberOfPages).keys()].map(element=>element+1)

    const handlePaginationButton = (value)=>{
        // console.log(value);
        setCurrentPage(value);
        window.scrollTo(0, 0);
    }
    return (
        <div className="container mx-auto flex gap-6">
            {/* sidebar */}
            <Sidebar/>
            
            <div>
            <div className="border border-[#aeffde] h-[80px] w-full">

            </div>
            <div className="grid grid-cols-3 gap-3">
            {
                products.map(product=><ProductCard key={product._id} product={product}/>)
            }
            </div>
            {/* pagination */}
            <div className="my-12 flex justify-center items-center">
            
            {/* prev button */}
            <button
            disabled={currentPage === 1}
            onClick={()=>handlePaginationButton(currentPage-1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-white rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-green-500  hover:text-white">Prev</button>

            {
                pages.map(pageNum=>(
                    <button
                    onClick={()=>handlePaginationButton(pageNum)}
                    className={`hidden ${currentPage === pageNum? 'bg-green-500 text-white': ''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-green-500  hover:text-white`} 
                    key={{pageNum}}>{pageNum}</button>
                ))
            }

            {/* next button */}
            <button
            disabled={currentPage === numberOfPages}
            onClick={()=>handlePaginationButton(currentPage+1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-white rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-green-500  hover:text-white">next</button>
            </div>
            </div>
            
        </div>
    );
};

export default AllProducts;