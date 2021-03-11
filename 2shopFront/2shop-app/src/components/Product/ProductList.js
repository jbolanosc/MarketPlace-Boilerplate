import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../../api/ProductAPI";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const query = {
      seller: "",
    };
    const result = await getProducts(query);
    setProducts(...products, result.data);
  }

  useEffect(() => {
    fetchProducts();
    console.log("calling");
  }, []);

  return (
    <>
      <h2 className="covered text-2xl"> Current products</h2>
      <div className="flex flex-wrap w-4/5">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
