import { Router } from "express";
import { userLogin, sellerLogin } from "../controllers/auth";

const authRouter = Router();

authRouter.route("/user").post(userLogin);

authRouter.route("/seller").post(sellerLogin);

export default authRouter;
