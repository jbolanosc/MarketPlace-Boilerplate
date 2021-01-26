import react from "react";

const cart = {
  products: "",
  total: "",
};

const CartContext = react.createContext(cart);

export default CartContext;
