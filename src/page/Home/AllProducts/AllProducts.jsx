import { useEffect, useState } from "react";
import ProductCard from "../../../components/Navbar/ProductCard/ProductCard";
import Sidebar from "../../../components/Navbar/Sidebar/Sidebar";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
    
//   search
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

// sorting
const [sortType, setSortType] = useState("");

const handleSortChange = (e) => {
  setSortType(e.target.value);
};


  // Filters
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const numberOfPages = Math.ceil(count / itemsPerPage);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/all-products?page=${currentPage}&size=${itemsPerPage}&search=${search}&sort=${sortType}&brand=${brandFilter}&category=${categoryFilter}&price=${priceFilter}`,
        { withCredentials: true }
      );

      setProducts(data);
    };
    getData();
  }, [currentPage, itemsPerPage, search,sortType,brandFilter, categoryFilter, priceFilter]);

  // get count
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/products-count?&search=${search}&sort=${sortType}&brand=${brandFilter}&category=${categoryFilter}&price=${priceFilter}`,
        { withCredentials: true }
      );
      setCount(data.count);
      setLoading(false);
    };

    getCount();
  }, [search,sortType,brandFilter, categoryFilter, priceFilter]);
  // console.log(count);

  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handlePaginationButton = (value) => {
    // console.log(value);
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  if (loading) return <p>Loading...</p>
  return (
    <div className="container mx-auto flex gap-6">
      {/* sidebar */}
      <Sidebar 
      setBrandFilter={setBrandFilter} 
      setCategoryFilter={setCategoryFilter} 
      setPriceFilter={setPriceFilter} 
      />

      <div>
        <div className="w-full flex justify-between gap-10">
          {/* search bar */}
          <form
            className="flex flex-col md:flex-row gap-3"
            onSubmit={handleSearch}
          >
            <div className="flex">
              <input
                name="search"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                type="text"
                placeholder="Search product name"
                className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-[#aeffde] focus:outline-none focus:border-[#aeffde]"
              />
              <button className="bg-[#2e302f] text-white rounded-r px-2 md:px-3 py-0 md:py-1">
                Search
              </button>
            </div>
          </form>

          {/* sort by */}
          <select
            id="sortingType"
            name="sortingType"
            onChange={handleSortChange} 
            className="w-[200px] h-10 border-2 border-[#aeffde] focus:outline-none focus:border-[#aeffde] text-[#222] rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          >
            <option value="">All</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
        {
          products.length==0?
          <p className="flex justify-center items-center my-20">No product found</p>
          :
          <div className="grid grid-cols-3 gap-3 mt-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        }
        {/* pagination */}
        {
          products.length>0 && <div className="my-12 flex justify-center items-center">
          {/* prev button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-white rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#aeffde]  hover:text-[#222]"
          >
            Prev
          </button>

          {pages.map((pageNum) => (
            <button
              onClick={() => handlePaginationButton(pageNum)}
              className={`hidden ${
                currentPage === pageNum ? "bg-[#aeffde] text-[#222]" : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-[#aeffde]  hover:text-[#222]`}
              key={{ pageNum }}
            >
              {pageNum}
            </button>
          ))}

          {/* next button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-white rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#aeffde]  hover:text-white"
          >
            next
          </button>
        </div>

        }
      </div>
    </div>
  );
};

export default AllProducts;
