import { getCookie } from "@/utils/session";
import nextCookies from 'next-cookies';
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const cookies = nextCookies({ req });
    const userCookie = cookies;
    console.log("whaa", userCookie);
    
    if (userCookie) {
      res.status(200).json({ userCookie });
    } else {
      res.status(404).json({ message: "User cookie not found" });
    }
  }
}