import NextAuth, { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { JWT } from "next-auth/jwt"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined, req: any): Promise<User | null> {
        // console.log("credentials:", credentials);
        if (credentials?.email === "user@example.com" && credentials?.password === "password") {
          // console.log("Authorization successful");
          return { id: "1", name: "User", email: "user@example.com" }
        } else {
          console.log("Authorization failed");
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, 
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT, user?: User }): Promise<JWT> {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }: { session: any, token: JWT }): Promise<any> {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  pages: {
    signIn: '/',
  },
  debug: true, 
}

export default NextAuth(authOptions)