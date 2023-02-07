import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import prisma from '../../../lib/prisma';
import '../../../types/environment.d.ts';

export default NextAuth({
	pages: {
		signIn: '/auth/signin',
	},
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			id: "credentials",
			name: "credentials",
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "jsmith",
				},
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials, req) => {
				const user = await fetch(
					`${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
							accept: "application/json",
						},
						// @ts-ignore
						body: Object.entries(credentials)
							.map((e) => e.join("="))
							.join("&"),
					},
				)
					.then((res) => res.json())
					.catch((err) => {
						return null;
					});

				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
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
					// @ts-ignore: bug where types don't match from prisma schema
					session.user.sheetsEmbed = prismaUser.sheetsEmbed as string;

					
				}
			}
			return session
		},
		async jwt({ token, user, account, profile, isNewUser }) { return token }
	},
});