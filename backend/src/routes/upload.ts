import express from "express";
import multer from "multer";
import path from "path";
import uuid from "uuid";

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, uuid.v4() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const uploadRouter = express.Router();

uploadRouter.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default uploadRouter;
