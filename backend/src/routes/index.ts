import express, { Request, Response } from "express";
import productRouter from "./seller/productRoutes";
import sellerRouter from "./seller/sellerRoutes";
import orderRouter from "./user/order.route";
import authRouter from "./auth/auth.route";
import deliveryRouter from "./delivery/delivery.route";
import userRouter from "./user/user.route";

import { Multer, sendUploadToGCS } from "../util";

const router = express.Router();

router
  .get("/ping", (req: Request, res: Response) => {
    return res.json("pong");
  })
  .use("/sellers", sellerRouter)
  .use("/products", productRouter)
  .use("/orders", orderRouter)
  .use("/auth", authRouter)
  .use("/delivery", deliveryRouter)
  .use("/user", userRouter)
  .post("/upload", Multer.array("image"), sendUploadToGCS, (req, res, next) => {
    console.log(req.files[0].cloudStoragePublicUrl); // you will get the uploaded files name and url here

    res.status(200).json({ url: req.files[0].cloudStoragePublicUrl });
  });

export default router;
