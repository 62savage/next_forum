import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Edit(props) {
  const db = (await connectDB).db('forum');
  const result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.slug) });

  return (
    <form action="/api/post/edit" method="POST">
      <input name="title" defaultValue={result.title} />
      <input name="content" defaultValue={result.content} />
      <input
        style={{ display: 'none' }}
        name="_id"
        defaultValue={props.params.slug}
      />
      <button type="submit"> Edit</button>
    </form>
  );
}
