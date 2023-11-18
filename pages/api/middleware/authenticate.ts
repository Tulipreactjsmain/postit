import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

interface MyJwtPayload {
  userId: string;
  username: string;
  email: string;
  profileImg: string;
  createdAt: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const token = req.cookies.postit;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Missing token" });
    }
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as MyJwtPayload;
      const { userId, username, email, profileImg, createdAt } = decoded;
      res.status(200).json({ userId, username, email, profileImg, createdAt });
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  } else {
    res.status(405).end();
  }
}
