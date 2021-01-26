import { Router } from "express";

import {
  getTopSellers,
  getSellerInfo,
  getSellers,
  createSeller,
  updateProfile,
  disableSeller,
} from "../../controllers/seller/seller.controller";
import { isAuth, isSeller, Multer, sendUploadToGCS } from "../../util";

const sellerRouter = Router();

sellerRouter
  .route("/")
  .get(getSellers)
  .post(isAuth, Multer.single("image"), sendUploadToGCS, createSeller);

sellerRouter.route("/:id").get(getSellerInfo);

sellerRouter.route("/top/sellers").get(getTopSellers);

sellerRouter
  .route("/profile/:id")
  .get(getSellerInfo)
  .put(isAuth, isSeller, Multer.single("image"), sendUploadToGCS, updateProfile)
  .delete(isAuth, isSeller, disableSeller);

export default sellerRouter;
