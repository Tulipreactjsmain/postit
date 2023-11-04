import User from "@/models/auth";
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import db from "@/utils/connectDb";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.use(async (req, res, next) => {
    if (db.readyState !== 1) {
      db.once('open', () => next());
    } else {
      next();
    }
  });


  handler.post(async (req, res) => {
    console.log(req.body);
    
    try {
      const { username, email, password } = req.body;
      const user = new User({
        username,
        email,
        password,
      });
  
      await user.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'User registration failed' });
    }
  });
  
  export default handler;