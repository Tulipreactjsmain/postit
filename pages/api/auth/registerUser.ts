import User from "@/models/auth";
import { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/connectDb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ensure the database is connected
  // if (db.readyState !== 1) {
  //   await db.connect();
  // }

  if (req.method === "POST") {
    try {
      const { username, email, password, profileImg } = req.body;
      const user = new User({
        username,
        email,
        password,
        profileImg,
      });

      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "User registration failed" });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }

  // // Disconnect from the database
  // if (db.readyState === 1) {
  //   await db.disconnect();
  // }
}
