import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const db = (await connectDB).db('forum');
  const result = await db
    .collection('post')
    .deleteOne({ _id: new ObjectId(req.query.id) });
  return res.status(200).json('deleted');
}
