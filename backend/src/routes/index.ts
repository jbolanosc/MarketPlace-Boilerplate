import { Router } from "express";
import productRouter from "./seller/productRoutes";
import sellerRouter from "./seller/sellerRoutes";
import orderRouter from "./user/order.route";
import authRouter from "./auth.route";
import deliveryRouter from "./delivery/delivery.route";

const router = Router();

router.use("/sellers", sellerRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/auth", authRouter);
router.use("/delivery", deliveryRouter);

export default router;
