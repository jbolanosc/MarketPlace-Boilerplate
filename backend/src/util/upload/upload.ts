import multer from "multer";

const storage = multer.memoryStorage();

const Multer = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
  },
});

export default Multer;
