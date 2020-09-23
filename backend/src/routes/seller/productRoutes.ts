import { Router } from "express";
import {
  getProduct,
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addProductReview,
} from "../../controllers/seller/product.controller";
import { isAuth, isSeller } from "../../util/verify";

const productRouter = Router();

productRouter.route("/").get(getProducts).post(isAuth, isSeller, createProduct);

productRouter
  .route("/:id")
  .get(getProduct)
  .put(isAuth, isSeller, updateProduct)
  .delete(isAuth, isSeller, deleteProduct);

productRouter.route("/:id/reviews").post(isAuth, addProductReview);

export default productRouter;
