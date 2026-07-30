import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
const handler = NextAuth({
  providers: [
    GithubProvider({
        clientId:"Ov23lifKejK0c37xNGVN",
        clientSecret:"d762fb02eef4b0f2bded0f07c801aa6cc9702474"
    })]
  })
 

  export {handler as GET,handler as POST}