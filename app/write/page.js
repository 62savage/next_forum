export default function Write() {
  return (
    <div>
      <h4 className="p-20">Writing a Post</h4>
      <form action="/api/post/new" method="POST" className="post-box">
        <input name="title" />
        <input name="content" />
        <button type="submit">BUTTON</button>
      </form>
    </div>
  );
}
