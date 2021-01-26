import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../../api/ProductAPI";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const result = await getProducts();
    setProducts(...products, result.data);
  }

  useEffect(() => {
    fetchProducts();
  }, [,]);

  return (
    <>
      <h2 className=""> Current products</h2>
      <div className="flex flex-wrap w-4/5">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
