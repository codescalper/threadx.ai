import type {NextAuthOptions} from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import{PrismaAdapter} from '@next-auth/prisma-adapter'
import GitHubProvider from "next-auth/providers/github";
import { db } from './db';
import { compare } from 'bcrypt';
import GoogleProvider from "next-auth/providers/google";
export const authOptions:NextAuthOptions={
    adapter:PrismaAdapter(db),
    session:{
        strategy:'jwt'
    },
    pages:{
        signIn:'/sign-in'
    },
     
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!
      }),
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "john@mail.com    " },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials?.email || !credentials?.password){
              return null
            };
            const existingUser = await db.user.findUnique({
                where:{
                  email:credentials?.email
                }
              });
            if (!existingUser){
              return null
            };

            if(existingUser.password){
            const passwordMatch = await compare(credentials.password,existingUser.password);
            if(!passwordMatch){
              return null;
            }
          }
            return { 
              id:`${existingUser.id}`,
              email:existingUser.email
            }
          }
        })
      ]
}
