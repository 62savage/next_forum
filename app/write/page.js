export default function Write() {
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
