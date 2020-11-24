import mongoose from "mongoose";
import { seedDB } from "./seed";

export default (db: string) => {
  const connect = () => {
    mongoose
      .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        return console.log("db connected");
      })
      .catch((err) => {
        console.log("Error on db" + err);
        return process.exit(1);
      });
  };

  connect();

  //seedDB();

  mongoose.connection.on("disconnected", connect);
};
