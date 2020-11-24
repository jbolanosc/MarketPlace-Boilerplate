import { Router } from "express";

import {
  getTopSellers,
  getSellerInfo,
  getSellers,
  createSeller,
  updateProfile,
  disableSeller,
} from "../../controllers/seller/seller.controller";
import { isAuth, isSeller, upload } from "../../util";

const sellerRouter = Router();

sellerRouter
  .route("/")
  .get(getSellers)
  .post(isAuth, upload.single("image"), createSeller);

sellerRouter.route("/:id").get(getSellerInfo);

sellerRouter.route("/top/sellers").get(getTopSellers);

sellerRouter
  .route("/profile/:id")
  .get(getSellerInfo)
  .put(isAuth, isSeller, upload.single("image"), updateProfile)
  .delete(isAuth, isSeller, disableSeller);

export default sellerRouter;
