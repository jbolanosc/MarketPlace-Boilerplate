import { Router } from "express";
import { userLogin, sellerLogin, getCsrf } from "../../controllers/auth";

const authRouter = Router();

authRouter.route("/user").post(userLogin);

authRouter.route("/csrf").get(getCsrf);

authRouter.route("/seller").post(sellerLogin);

export default authRouter;
