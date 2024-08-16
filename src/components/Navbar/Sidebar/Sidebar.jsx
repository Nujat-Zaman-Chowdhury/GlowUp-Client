

const Sidebar = ({ setBrandFilter, setCategoryFilter, setPriceFilter }) => {
    const handleBrandChange = (e) => {
        setBrandFilter(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPriceFilter(e.target.value);
    };
    return (
        <aside className="w-full lg:w-[25%] h-400px lg:h-screen bg-[#ecf0ee] shadow-md rounded flex flex-col md:flex-row lg:flex-col gap-2 lg:gap-0">
                <h3 className="text-lg lg:text-2xl my-3 text-center uppercase">Filter By</h3>

                <div className="my-3 md:my-6 bg-white shadow-md w-[80%] md:w-[27%] lg:w-[90%] mx-auto ">
                <select 
                
                onChange={handleBrandChange} 
                className="w-full h-10  rounded-md focus:outline-none">
                    <option value="">Brand</option>
                    <option value="GlowSkin">GlowSkin</option>
                    <option value="YouthRevive">YouthRevive</option>
                    <option value="RadiantEyes">RadiantEyes</option>
                    <option value="PureGlow">PureGlow</option> 
                    <option value="DreamSkin">DreamSkin</option>
                    <option value="HairEssence">HairEssence</option>
                    <option value="SunShield">SunShield</option>
                    <option value="RepairPro">RepairPro</option>
                </select>
            </div>

            <div className="my-3 md:my-6 bg-white shadow-md w-[80%] md:w-[27%] lg:w-[90%] mx-auto">
                <select 
                onChange={handleCategoryChange}
                 className="w-full h-10  rounded-md">
                    <option value="">Category</option>
                    <option value="Skincare">Skincare</option>
                    <option value="Haircare">Haircare</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Bodycare">Bodycare</option>
                    <option value="Fragrance">Fragrance</option>
                    
                </select>
            </div>

            <div className="my-3 md:my-6 bg-white shadow-md w-[80%] md:w-[27%] lg:w-[90%] mx-auto">
                <select 
                onChange={handlePriceChange}
                 className="w-full h-10  rounded-md">
                    <option value="">Price</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="51-100">$51 - $100</option>
                    <option value="101-200">$101 - $200</option>
                </select>
            </div>
        </aside>
    );
};

export default Sidebar;