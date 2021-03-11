import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import connect from "./db/connect";
import router from "./routes";

const app: Application = express();
const port: string = process.env.PORT || "5000";

const csrfProtection = csrf({
  cookie: true,
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(csrfProtection);

const db: string = process.env.MONGODB_URI || "";

connect(db);

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

export default app;
