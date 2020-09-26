import { Router } from "express";
import {
  getDelivery,
  createDelivery,
  updateDelivery,
  deleteDelivery,
} from "../../controllers/delivery/deliveryController";
import { isAuth, isSeller } from "../../util";

const deliveryRouter = Router();

deliveryRouter.route("/").post(isSeller, createDelivery);

deliveryRouter
  .route("/:id")
  .get(isAuth, getDelivery)
  .put(isSeller, updateDelivery)
  .delete(isSeller, deleteDelivery);

export default deliveryRouter;
