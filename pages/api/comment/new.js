import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(500).json('PLEASE LOGIN');
  }
  if (req.method == 'POST') {
    const { comment, _id } = JSON.parse(req.body);
    const newComment = {
      content: comment,
      parent: new ObjectId(_id),
      author: session.user.email,
    };

    const db = (await connectDB).db('forum');
    const result = db.collection('comment').insertOne(newComment);
    return res.status(200).json('done');
  }
}
