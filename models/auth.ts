import mongoose, { Document, Schema } from "mongoose";

export interface UserInterface {
  username: string;
  email: string;
  password: string;
  profileImg: string;
  createdAt: Date; 
}
const userSchema = new Schema<UserInterface & Document>(
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

const User = mongoose.models.User || mongoose.model<UserInterface & Document>("user", userSchema);

export default User;
