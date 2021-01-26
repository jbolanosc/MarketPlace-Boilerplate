import { Router } from "express";
import {
  getUserProfile,
  getUserInfo,
  updateProfile,
  createUser,
  disableUser,
} from "../../controllers/user/userController";
import { isAuth, isUser, isSeller, Multer, sendUploadToGCS } from "../../util";

const userRouter = Router();

userRouter
  .route("/:id")
  .get(getUserProfile)
  .put(isAuth, isUser, updateProfile)
  .delete(isAuth, isUser, disableUser);

//TODO validate that only returns info fields
//This will be accesed by sellers to reveiew user
userRouter.route("/profile/:id").get(isAuth, isSeller, getUserInfo);

userRouter.route("/").post(Multer.single("image"), sendUploadToGCS, createUser);

export default userRouter;
