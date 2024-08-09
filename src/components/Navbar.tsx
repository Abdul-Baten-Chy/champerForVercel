import { RootState } from "@/redux/Feature/store";
import { useAppSelector } from "@/redux/hook";
import { Link, NavLink } from "react-router-dom";
import cartIcon from "../assets/shopping-cart.png";

const Navbar = () => {
  const data = useAppSelector((state: RootState) => state.cart.cart);

  return (
    <nav className="w-full ">
      <div className="navbar  max-w-[1280px]  mx-auto px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#000000]"
            >
              <NavLink to="/">
                <li className="hover:scale-105 hover:bg-[#F26B4E] transition duration-700 ease-in  ">
                  HOME
                </li>
              </NavLink>
              <NavLink to="/products">
                <li className="hover:scale-105 transition duration-700 ease-in  ">
                  PRODUCTS
                </li>
              </NavLink>
              <NavLink to="/addFoods">
                <li className="hover:scale-105 transition duration-700 ease-in  ">
                  PRODUCT MGT
                </li>
              </NavLink>
              <NavLink to="/myFoods">
                <li className="hover:scale-105 transition duration-700 ease-in  ">
                  ABOUT
                </li>
              </NavLink>
            </ul>
          </div>
          <h2 className="text-2xl lg:4xl font-extrabold">Champer</h2>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4  text-[20px] text-[#000000]">
            <NavLink to="/">
              <li className="  ">HOME</li>
            </NavLink>
            <NavLink to="/products">
              <li className=" ">PRODUCT</li>
            </NavLink>
            <NavLink to="/productMgt">
              <li className=" ">PRODUCT MGT</li>
            </NavLink>
            <NavLink to="/about">
              <li className=" ">ABOUT</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="relative">
            <Link to="/cart">
              <img className="w-[30px]  mr-4" src={cartIcon} alt="" />
            </Link>
            <h2 className="absolute text-bold text-black font-[24px] top-1/2 left-1/2  transform -translate-x-[60%] -translate-y-[90%]">
              {data.length}
            </h2>
          </div>
          <button className="bg-[#f7a695] text-white px-8 py-2 rounded-full">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
