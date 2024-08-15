import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts/AllProducts';
import axios from 'axios';



const Home = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = async()=>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/categories`,{withCredentials:true})
        // console.log(data);
        setCategories(data);
    }
    return (
        <div>
            <div className="text-2xl md:text-4xl text-[#64e2b0] font-bold font-poppins flex justify-center items-center mt-6 mb-10">
                <h1>“Hot Selling Products”</h1>
            </div>
            <div className='grid grid-cols-5 gap-3 my-10 container mx-auto'>
                {
                    categories.map(category=><button
                        className='btn bg-[#aeffde] text-[#222] font-karla w-[100px]'
                        key={category._id}>{category.categoryName}</button>)
                }
            </div>
            <AllProducts/>
        </div>
    );
};

export default Home;