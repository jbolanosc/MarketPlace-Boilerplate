import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="px-16 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl covered font-bold text-blue-600">2Shop</h1>
        </Link>
      </div>
      <label className="cursor-pointer lg:hidden block" htmlFor="menu-toggle">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </label>
      <input type="checkbox" className="hidden" id="menu-toggle" />
      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li>
              <Link
                to="/products"
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-blue-300 font-bold"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/stores"
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-blue-300 font-bold"
              >
                Stores
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-blue-300 font-bold"
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-blue-300 font-bold"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="/profile"
          className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer"
        >
          <img
            src="./images/store.png"
            className="rounded-full w-10 h-10 border-2 border-transparent hover:hover-green-200"
            alt=""
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
