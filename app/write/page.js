import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function Write() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Please LOGIN</div>;
  }
  return (
    <div>
      <h4 className="p-20">Writing a Post</h4>
      <form action="/api/post/new" method="POST" className="post-box">
        <input name="title" type="text" placeholder="Title" />
        <input name="content" type="text" placeholder="Content" />
        <button type="submit">POST</button>
      </form>
    </div>
  );
}
