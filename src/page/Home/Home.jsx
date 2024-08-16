import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts/AllProducts';
import axios from 'axios';



const Home = () => {
    return (
        <div>
            <div className="text-2xl md:text-4xl text-[#64e2b0] font-bold font-poppins flex justify-center items-center mt-6 mb-10">
                <h1>“Hot Selling Products”</h1>
            </div>
            <AllProducts/>
        </div>
    );
};

export default Home;