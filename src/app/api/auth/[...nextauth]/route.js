import nextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handle = nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.SECRET_ID
    })
  ]
})

export { handle as GET, handle as POST }
