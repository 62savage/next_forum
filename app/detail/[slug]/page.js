import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import Comment from './Comment';

export default async function Detail(props) {
  const db = (await connectDB).db('forum');
  const result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.slug) });

  return (
    <section>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment _id={props.params.slug} />
    </section>
  );
}
