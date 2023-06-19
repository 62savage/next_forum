import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    //  REQ 1
    if (
      req.body.title === '' ||
      req.body.password === '' ||
      req.body.email === ''
    ) {
      return res.status(500).json('SOMETHING IS EMPTY');
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    const db = (await connectDB).db('forum');
    const emailExist = await db
      .collection('user_cred')
      .findOne({ email: req.body.email });
    // REQ 2
    if (emailExist) {
      return res.status(500).json('ALREADY EXISTS EMAIL');
    }
    const result = await db.collection('user_cred').insertOne(req.body);

    return res.redirect(302, '/list');
  }
}
