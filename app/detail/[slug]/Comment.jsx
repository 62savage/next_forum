'use client';

import { useEffect, useState } from 'react';

export default function Comment({ _id }) {
  const [comment, setComment] = useState('');
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    fetch(`/api/comment/list?id=${_id}`)
      .then((r) => r.json())
      .then(setData);
  }, []);
  return (
    <div>
      <hr />
      <h2>
        {data.length > 0
          ? data.map((a, i) => <div key={i}>{a.content}</div>)
          : 'NO COMMENT'}
      </h2>
      <input
        type="text"
        placeholder="COMMENT"
        onChange={(e) => {
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
