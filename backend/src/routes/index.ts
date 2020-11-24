import express, { Request, Response } from "express";
import productRouter from "./seller/productRoutes";
import sellerRouter from "./seller/sellerRoutes";
import orderRouter from "./user/order.route";
import authRouter from "./auth.route";
import deliveryRouter from "./delivery/delivery.route";

const router = express.Router();

router
  .get("/ping", (req: Request, res: Response) => {
    return res.json("pong");
  })
  .use("/sellers", sellerRouter)
  .use("/products", productRouter)
  .use("/orders", orderRouter)
  .use("/auth", authRouter)
  .use("/delivery", deliveryRouter);

export default router;
