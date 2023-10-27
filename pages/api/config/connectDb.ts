import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async (): Promise<void>  => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "blog",
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
