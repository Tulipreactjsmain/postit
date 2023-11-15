import nextCookies from 'next-cookies';
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  
  if (req.method === "GET") {
    const userCookie = nextCookies({ req });
    console.log("usercook", userCookie);
    
    if (userCookie) {
      res.status(200).json({ userCookie });
    } else {
      res.status(404).json({ message: "User cookie not found" });
    }
  }
}