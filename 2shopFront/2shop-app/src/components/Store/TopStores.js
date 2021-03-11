import React from "react";

const TopStores = () => {
  return (
    <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">
      <div className="w-full bg-gray-200 max-w-sm rounded-md shadow-md overflow-hidden flex flex-col items-center justify-center">
        <div className="flex items-center justify-center h-56 w-full">
          <img
            src="https://source.unsplash.com/featured/?shoes"
            class="rounded-full h-32 w-32 "
            alt=""
          />
        </div>
        <div className="px-5 py-3 bg-white">
          <h3 className="text-xl text-blue-700 covered font-bold uppercase">
            2x1 Shoes shop
          </h3>
        </div>
      </div>

      <div className="w-full bg-gray-200 max-w-sm rounded-md shadow-md overflow-hidden flex flex-col items-center justify-center">
        <div className="flex items-center justify-center h-56 w-full">
          <img
            src="https://source.unsplash.com/featured/?jewelry"
            class="rounded-full h-32 w-32 "
            alt=""
          />
        </div>
        <div className="px-5 py-3 bg-white">
          <h3 className="text-xl text-blue-700 covered font-bold uppercase">
            Gold Sun Jewelry
          </h3>
        </div>
      </div>

      <div className="w-full bg-gray-200 max-w-sm rounded-md shadow-md overflow-hidden flex flex-col items-center justify-center">
        <div className="flex items-center justify-center h-56 w-full">
          <img
            src="https://source.unsplash.com/featured/?watch"
            class="rounded-full h-32 w-32 "
            alt=""
          />
        </div>
        <div className="px-5 py-3 bg-white">
          <h3 className="text-xl text-blue-700 covered font-bold uppercase">
            watch shop
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TopStores;
