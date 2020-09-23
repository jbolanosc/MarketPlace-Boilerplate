import mongoose from "mongoose";

export default (db: string) => {
  const connect = () => {
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => {
        return console.log("db connected");
      })
      .catch((err) => {
        console.log("Error on db" + err);
        return process.exit(1);
      });
  };

  connect();

  mongoose.connection.on("disconnected", connect);
};
