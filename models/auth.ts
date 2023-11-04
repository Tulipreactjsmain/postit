import mongoose, { Document, Schema } from "mongoose";

export interface User {
  username: string;
  email: string;
  password: string;
  profileImg: string;
}
const userSchema = new Schema<User & Document>(
  {
    username: {
      type: String,
      required: true,
      unique: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<User & Document>("User", userSchema);

export default User;
