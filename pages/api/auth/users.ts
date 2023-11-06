import User from "@/models/auth";
import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/utils/connectDb";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = mongoose.connection;
  console.log(db.readyState);

  if (req.method === "POST") {
    if (db.readyState !== 1) {
      connectDb();
    }

    const { username, email, password, profileImg } = req.body;
    try {
      const userExists = await User.findOne({ $or: [{ email }, { username }] });
      if (userExists) {
        return res.status(404).json({
          message: "User with the same email or username already exists.",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        username,
        email,
        password: passwordHash,
        profileImg:
          profileImg ||
          "https://res.cloudinary.com/techbro/image/upload/v1696705659/Task%20Duty/userDefault_IMG_bkhzne.jpg",
      });

      const user = {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        profileImg: newUser.profileImg,
        createdAt: newUser.createdAt,
      };

      res.status(201).json({ user, msg: "User registration successful" });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
