import NextAuth from "next-auth"
import {options} from './options'


const handler = NextAuth(options);
export {handler as GET, handler as POST}

/* export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize (credentials, req) {
            let user = null

            const saltedPasswordToCheck = passwordToSalt(credentials.password)
            user = await getUserFromDb(credentials.email, credentials.password)
      
            if (!user) {
              const saltedPassword = passwordToSalt(credentials.password)
              user = await addUserToDb(credentials.email, saltedPassword)
            }
      
            if (!user) {
              throw new Error("User was not found and could not be created.")
            }
      
            return user
        }
      })
    ],
    session: { strategy: "jwt" }

  ],
}
export default NextAuth(authOptions) */