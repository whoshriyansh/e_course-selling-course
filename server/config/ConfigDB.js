import mongoose from "mongoose";

const ConnectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB is connected Sucesfully");
    })
    .catch((err) => {
      console.log(`Error while connecting to MOngo db ${err}`);
    });
};

export default ConnectDB;
