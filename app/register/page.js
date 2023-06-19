export default function Register() {
  return (
    <form action="/api/auth/signup" method="POST">
      <input name="id" type="text" placeholder="NAME" />
      <input name="email" type="text" placeholder="EMAIL" />
      <input
        name="password"
        type="password"
        placeholder="PASSWORD"
        autoComplete="current-password"
      />
      <button type="submit">REGISTER</button>
    </form>
  );
}
