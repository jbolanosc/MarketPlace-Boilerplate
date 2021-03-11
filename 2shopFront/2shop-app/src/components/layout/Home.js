import React from "react";
import TopProducts from "../Product/TopProducts";
import TopStores from "../Store/TopStores";

const Home = () => {
  return (
    <>
      <div className="min-h-screen py-4 bg-blue-600 w-full flex flex-col items-center justify-center">
        <h2 className="text-6xl text-white covered">Welcome to 2hop</h2>
        <div className="flex flex-col items-center justify-center w-full md:px-4">
          <h4 className="text-4xl covered text-white py-2 font-bold">
            Popular Products
          </h4>
          <TopProducts />
        </div>
      </div>
      <div className="min-h-screen py-4 bg-white w-full flex flex-col items-center justify-center">
        <h4 className="text-4xl covered text-blue-600 py-2 font-bold">
          Popular Stores
        </h4>
        <TopStores />
      </div>
    </>
  );
};

export default Home;
