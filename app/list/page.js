import { connectDB } from '@/util/database';
import ListItem from './ListItem';

export default async function List() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <main className="list-bg">
      <ListItem resultStringify={JSON.stringify(result)} />
    </main>
  );
}
