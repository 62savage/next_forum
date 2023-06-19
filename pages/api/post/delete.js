import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  if (req.method == 'DELETE') {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(500).json('no Session exists');
    }

    const db = (await connectDB).db('forum');
    const article = await db
      .collection('post')
      .findOne({ _id: new ObjectId(req.query.id) });

    if (article.author === session.user.email) {
      try {
        const db = (await connectDB).db('forum');
        const result = await db
          .collection('post')
          .deleteOne({ _id: new ObjectId(req.query.id) });
        return res.status(200).json('deleted');
      } catch (err) {
        return res.status(500).json('dbERROR');
      }
    } else {
      return res.status(500).json('is inconsistent with the author');
    }
  }
}
