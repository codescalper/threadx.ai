import type {NextAuthOptions} from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
export const options:NextAuthOptions={
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
            }),
        CredentialsProvider({
            name:"Credentials",
            credential:{
                username:{
                    label:"Username:",
                    type:"text",
                    placeholder:"Your username"
                },
            },
            async authorize(credentials){
                
            }
        })
    ],

}

function CredentialsProvider(arg0: { name: string; credential: { username: { label: string; type: string; placeholder: string; }; }; }): import("next-auth/providers/index").Provider {
    throw new Error('Function not implemented.');
}
