import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "@/utils/connectDb";
import User from "@/models/auth";
import bcrypt from "bcrypt";

interface CustomUser {
  id: string;
  username: string;
  email: string;
  profileImg: string;
  createdAt: Date;
}

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
        const user: CustomUser = {
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
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        const user = await User.findById(account.providerAccountId.toString());
        if (user) {
          token.id = user._id.toString();
          token.name = user.username;
          token.picture = user.profileImg;
          token.createdAt = user.createdAt;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id,
          createdAt: token.createdAt,
        } as CustomUser;
      }
      return session;
    },
  },
});
