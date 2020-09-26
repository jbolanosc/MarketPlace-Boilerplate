import { Router } from "express";
import {
  getOrder,
  getSellerOrders,
  getUserOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../../controllers/user/orderController";
import { isAuth, isSeller, upload } from "../../util";

const orderRouter = Router();

orderRouter.route("/").post(isAuth, upload.array("images"), createOrder);

orderRouter
  .route("/:id")
  .get(isAuth, getOrder)
  .put(isAuth, updateOrder)
  .delete(isAuth, deleteOrder);

orderRouter.route("/seller/:id").get(isAuth, isSeller, getSellerOrders);

orderRouter.route("/user/:id").get(isAuth, getUserOrders);

export default orderRouter;
