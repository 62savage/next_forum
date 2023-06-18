import { connectDB } from '@/util/database';
import Link from 'next/link';

export default async function List() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <main className="list-bg">
      {result.map((a, i) => {
        return (
          <section key={`post_${i}`} className="list-item">
            <Link href={`/detail/${a._id.toString()}`} prefetch={false}>
              {a.title}
            </Link>
            <p>{a.content}</p>
          </section>
        );
      })}
    </main>
  );
}
