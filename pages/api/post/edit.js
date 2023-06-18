import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { _id, title, content } = req.body;
  const db = (await connectDB).db('forum');
  const result = await db
    .collection('post')
    .updateOne({ _id: new ObjectId(_id) }, { $set: { title, content } });

  console.log('result', result);

  return res.redirect(302, '/list');
}
