import { Router } from "express";

import {
  getTopSellers,
  getSellerInfo,
  getSellers,
  createSeller,
  updateProfile,
  disableSeller,
} from "../../controllers/seller/seller.controller";
import { isAuth, isSeller } from "../../util/verify";

const sellerRouter = Router();

sellerRouter.route("/").get(getSellers).post(isAuth, isSeller, createSeller);

sellerRouter.route("/:id").get(getSellerInfo);

sellerRouter.route("/top-sellers").get(getTopSellers);

sellerRouter
  .route("/profile")
  .get(getSellerInfo)
  .put(isAuth, isSeller, updateProfile)
  .delete(isAuth, isSeller, disableSeller);

export default sellerRouter;
