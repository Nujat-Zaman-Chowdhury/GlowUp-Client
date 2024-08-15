
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


//#82bd69
const Navbar = () => {
    const {user,logOut} = useAuth()

    return (
<div className="navbar bg-transparent">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link className="relative group">Home
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#b657a6] to-[#aeffde] transition-all group-hover:w-full"></span>
        </Link></li>
        <li><Link className="relative group">Shop
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#b657a6] to-[#aeffde] transition-all group-hover:w-full"></span>
        </Link></li>

      </ul>
    </div>
    <Link to="/" className="flex-1">
             <span className="btn border-0 shadow-none bg-gradient-to-r from-[#b657a6] to-[#aeffde] text-transparent bg-clip-text text-xl md:text-3xl font-bold">GlowUp</span> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link className="relative group">Home
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#b657a6] to-[#aeffde] transition-all group-hover:w-full"></span>
        </Link></li>
        <li><Link className="relative group">Shop
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#b657a6] to-[#aeffde] transition-all group-hover:w-full"></span>
        </Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex gap-5">
  {
        user?
        <Link onClick={logOut} to="/login" className="md:mr-4 relative rounded px-2 md:px-5 py-2.5 overflow-hidden group bg-[#aeffde]  hover:bg-gradient-to-r   hover:from-[#e4badd] hover:to-[#aeffde] text-[#222222] hover:ring-2 hover:ring-offset-2 hover:ring-green-100 transition-all ease-out duration-300">
        <span className="absolute right-0 md:w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">Logout</span>
        </Link>:
        <Link  to="/login" className="mr-4 relative rounded px-5 py-2.5 overflow-hidden group bg-[#aeffde]  hover:bg-gradient-to-r   hover:from-[#e4badd] hover:to-[#aeffde] text-[#222222] hover:ring-2 hover:ring-offset-2 hover:ring-green-100 transition-all ease-out duration-300">
        <span className="absolute right-0 md:w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">Login</span>
        </Link>
  }
  </div>
  <>
  {
        user &&
        <div className="dropdown dropdown-end text-white">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-[#aeffde]">
        
        <div title={user?.displayName} className="w-10 rounded-full">
          <img alt="user profile" src={user?.photoURL} />
        </div>
        
      </div>
    </div>
    }
  </>
  </div>
</div>
    );
};

export default Navbar;