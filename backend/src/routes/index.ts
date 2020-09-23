import { Router } from "express";
import productRouter from "./seller/productRoutes";
import sellerRouter from "./seller/sellerRoutes";
import uploadRouter from "./upload";

const router = Router();

router.use("/sellers", sellerRouter);
router.use("/products", productRouter);
router.use("/upload", uploadRouter);

export default router;
