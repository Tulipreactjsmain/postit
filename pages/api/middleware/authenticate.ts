import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';


interface MyJwtPayload {
    userId: string;
  }
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const token = req.cookies.postit;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as MyJwtPayload
      const userId = decoded.userId 

      res.status(200).json({ userId });
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  } else {
    res.status(405).end()
  }
}
