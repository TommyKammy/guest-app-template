import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const githubId = process.env.AUTH_GITHUB_ID;
const githubSecret = process.env.AUTH_GITHUB_SECRET;

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  providers: githubId && githubSecret ? [GitHub({ clientId: githubId, clientSecret: githubSecret })] : []
});
