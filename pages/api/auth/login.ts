import User from "@/models/auth";
import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/utils/connectDb";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { setCookie } from "@/utils/session";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = mongoose.connection;

  if (req.method === "POST") {
    if (db.readyState !== 1) {
      connectDb();
    }

    const { email, password } = req.body;
    try {
      const userExists = await User.findOne({ email });
      if (!userExists) {
        return res.status(404).json({
          message: "User with the provided username not found.",
        });
      }

      const passwordMatch = await bcrypt.compare(password, userExists.password);

      if (!passwordMatch) {
        return res.status(401).json({
          message: "Incorrect password. Please try again.",
        });
      }

      const user = {
        _id: userExists._id,
        username: userExists.username,
        email: userExists.email,
        profileImg: userExists.profileImg,
        createdAt: userExists.createdAt,
      };
      setCookie(res, "user", user._id, {
        secure: true,
        httpOnly: true,
        path: '/',
        maxAge: 30 * 24 * 60 * 60,
      });

      res.status(200).json({ user, msg: "User login successful" });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
