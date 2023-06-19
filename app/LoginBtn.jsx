'use client';
import { signIn, signOut } from 'next-auth/react';

export default function LoginBtn({ session }) {
  return (
    <button
      onClick={() => {
        session ? signOut() : signIn();
      }}
    >
      {session ? '로그아웃' : '로그인'}
    </button>
  );
}
