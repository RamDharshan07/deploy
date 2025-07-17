import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

 const handles = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

export  { handles as GET,handles as POST };
