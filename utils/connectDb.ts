import mongoose from "mongoose";
const connectDb = async () => {
  let isConnected: boolean;

  const uri = process.env.MONGO_URI as string;
  const options = {
    dbName: "postit",
  };

  mongoose.connect(uri, options);

  const db = mongoose.connection;

  db.on("connected", () => {
    isConnected = true;
    console.log("MongoDB is connected");
  });

  db.on("error", (error) => {
    console.error("Error connecting to MongoDB:", error);
  });
};

export default connectDb;

