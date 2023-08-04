import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                },
                password: {
                    label: "Password:",
                    type: "password",
                }
            },
            async authorize(credentials) {
                // É aqui onde a gente vai pegar os dados dos usuários para fazer a autenticação 
                let user = { id: "1", name: "Bernardo", password: "123" }
                             
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          }),
    ],

    pages:{
        signIn:"/auth/signIn"
    }
}
