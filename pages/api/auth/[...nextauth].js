import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

//sdsddSDDSDD For some reason, the TypeORM adapter is not working. I have to use the legacy adapter.

const options = {
  adapter: TypeORMLegacyAdapter({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "root",
    database: "ratingdb",
    port: 3306,
    namingStrategy: new SnakeNamingStrategy(),
  }),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },

  secret: process.env.JWT_SECRET,
};

export default (req, res) => NextAuth(req, res, options);
