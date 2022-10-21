import NewxtAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NewxtAuth({
  providers: [
    CredentialProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const user = await fetch("http://localhost:3000/api/user/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }).then((res) => res.json());

        console.log(user);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
