import axios from "axios";

const ordersSufix = "/orders";

export const getOrders = async (id) => {
  const result = await axios.get(`${ordersSufix}/user/${id}`);
  return result;
};

export const getOrder = async (id) => {
  const result = await axios.get(`${ordersSufix}/${id}`);
  return result;
};

export const createOrder = async (data) => {
  const {
    user,
    seller,
    orderItems,
    shippingAddress,
    itemsPrice,
    tax,
    isPaid,
  } = data;

  const result = await axios.post(`${ordersSufix}`, {
    user,
    seller,
    orderItems,
    shippingAddress,
    itemsPrice,
    tax,
    isPaid,
  });

  return result;
};
