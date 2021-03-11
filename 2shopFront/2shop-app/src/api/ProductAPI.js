import axios from "axios";

const productsSufix = "/products";

export const getProducts = async (keyword, seller, pageNumber) => {
  const result = await axios.get(`${productsSufix}`);
  return result;
};

export const getProduct = async (id) => {
  const result = await axios.get(`${productsSufix}/${id}`);
  return result;
};

export const addProductReview = async (id, review) => {
  const { user, name, rating, comment } = review;
  const result = await axios.put(`${productsSufix}/${id}/reviews`, {
    user,
    name,
    rating,
    comment,
  });
};
