import { Router } from "express";
import {
  getProduct,
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addProductReview,
} from "../../controllers/seller/product.controller";
import { isAuth, isSeller, upload } from "../../util";

const productRouter = Router();

productRouter
  .route("/")
  .get(getProducts)
  .post(isAuth, isSeller, upload.array("images"), createProduct);

productRouter
  .route("/:id")
  .get(getProduct)
  .put(isAuth, isSeller, upload.array("images"), updateProduct)
  .delete(isAuth, isSeller, deleteProduct);

productRouter.route("/:id/reviews").post(isAuth, addProductReview);

export default productRouter;
