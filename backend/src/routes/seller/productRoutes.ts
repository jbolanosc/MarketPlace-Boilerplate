import { Router } from "express";
import {
  getProduct,
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addProductReview,
} from "../../controllers/seller/product.controller";
import { isAuth, isSeller, Multer, sendUploadToGCS } from "../../util";

const productRouter = Router();

productRouter
  .route("/")
  .get(getProducts)
  .post(
    isAuth,
    isSeller,
    Multer.array("images"),
    sendUploadToGCS,
    createProduct
  );

productRouter
  .route("/:id")
  .get(getProduct)
  .put(isAuth, isSeller, Multer.array("images"), sendUploadToGCS, updateProduct)
  .delete(isAuth, isSeller, deleteProduct);

productRouter.route("/:id/reviews").put(isAuth, addProductReview);

export default productRouter;
