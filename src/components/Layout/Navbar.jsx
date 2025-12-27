import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import {useSelector} from 'react-redux'
const Navbar = () => {

const items = useSelector(state => state.cart)
 

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full"
              src="/src/assets/images/food.png"
              alt="Logo"
            />
            <span className="font-semibold text-lg">FoodStore</span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-md">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none px-2 text-sm"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-700" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {items.length}
                </span>
              )}
            </Link>

            {/* Auth */}
            <Link
              to="/login"
              className="text-gray-700 hover:text-indigo-700 text-sm font-medium"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm rounded-md shadow"
            >
              Sign up
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
