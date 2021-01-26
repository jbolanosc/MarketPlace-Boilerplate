import React from "react";
import InfoCard from "../../util/Reusable/InfoCard";
import { getProducts } from "../../api/ProductAPI";

const Product = (props) => {
  return (
    <>
      <InfoCard element={props.product} />
    </>
  );
};

export default Product;
