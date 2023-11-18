import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "@/utils/connectDb";
import User from "@/models/auth";
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(
        credentials: { email?: string; password?: string } | undefined
      ) {
        const db = mongoose.connection;
        if (db.readyState !== 1) {
          connectDb();
        }
        const userExists = await User.findOne({ email: credentials?.email });
        console.log("userexists", userExists);

        if (!userExists) {
          throw new Error("User with the provided email not found.");
        }
        const passwordMatch = await bcrypt.compare(
          credentials?.password as string,
          userExists.password
        );
        if (!passwordMatch) {
          throw new Error("Incorrect password. Please try again.");
        }
        const user = {
          id: userExists._id,
          username: userExists.username,
          email: userExists.email,
          profileImg: userExists.profileImg,
          createdAt: userExists.createdAt,
        };
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/", 
  },
});
