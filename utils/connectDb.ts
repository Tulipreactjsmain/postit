import mongoose from "mongoose";

let isConnected: boolean;

// Define your database connection URI and options
const uri = process.env.MONGO_URI as string;
const options = {
  dbName: "postit",
};

// Create the default Mongoose connection
mongoose.connect(uri, options);

const db = mongoose.connection;

db.on("connected", () => {
  isConnected = true;
  console.log("MongoDB is connected");
});

db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

export default db;
