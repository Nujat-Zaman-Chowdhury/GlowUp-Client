import ProductCard from "../../../components/Navbar/ProductCard/ProductCard";


const AllProducts = () => {
    return (
        <div className="container mx-auto">
            <div className="text-2xl md:text-4xl text-[#64e2b0] font-bold font-poppins flex justify-center items-center mt-6 mb-10">
                <h1>“Hot Selling Products”</h1>
            </div>
            <div className="mt-12">
            <ProductCard/>
            </div>
        </div>
    );
};

export default AllProducts;