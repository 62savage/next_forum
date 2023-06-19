'use client';

import { useState } from 'react';

export default function Comment({ _id }) {
  const [comment, setComment] = useState('');
  return (
    <div>
      <hr />
      <h2>COMMENT LIST</h2>
      <input
        type="text"
        placeholder="COMMENT"
        onChange={(e) => {
          console.log(comment);
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({ comment, _id }),
          });
        }}
      >
        SEND
      </button>
    </div>
  );
}
