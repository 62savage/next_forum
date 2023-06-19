import { connectDB } from '@/util/database';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_AUTH_ID,
      clientSecret: process.env.GITHUB_AUTH_SECRET,
    }),
  ],
  secret: 'qqewerqwerdsf2cxbr',
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
