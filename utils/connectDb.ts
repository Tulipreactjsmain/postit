import mongoose from "mongoose";

let isConnected: boolean;
const uri = process.env.MONGO_URI as string;

// Export the database connection instance
export const db = mongoose.createConnection(uri, {
  dbName: "postit",
});

db.on("connected", () => {
  isConnected = true;
  console.log("MongoDB is connected");
});

db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

export default db;
