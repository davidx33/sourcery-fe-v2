import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '../../../lib/prisma';
import '../../../types/environment.d.ts';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) { return true },
    async redirect({ url, baseUrl }) { return baseUrl },
    async session({ session, token, user }) {
      if (session.user) {
        const prismaUser = await prisma.user.findUnique({
          where: {
            email: session.user.email as string
          }
        })
        if (prismaUser) {
          // @ts-ignore: bug where types don't match from prisma schema
          session.user.airtableViewId = prismaUser.airtableViewId as string;
        }
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) { return token }
  },
});