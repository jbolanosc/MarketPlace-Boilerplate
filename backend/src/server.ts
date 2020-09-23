import express, { Application, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./db/connect";
import router from "./routes";

import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port: unknown = process.env.PORT || 5000;

console.log(process.env.MONGODB_URI);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const db: string = process.env.MONGODB_URI || "";

connect(db);

app.use("/api", router);

app.get("/", (res: Response) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

export default app;
