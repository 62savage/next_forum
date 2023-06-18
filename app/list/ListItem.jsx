'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function ListItem({ resultStringify }) {
  const result = JSON.parse(resultStringify);
  return (
    <>
      {result.map((a, i) => {
        return (
          <section key={`post_${i}`} className="list-item">
            <Link href={`/detail/${a._id.toString()}`} prefetch={false}>
              <h4>{a.title}</h4>
            </Link>
            <Link href={`/edit/${a._id.toString()}`} prefetch={false}>
              ✏️
            </Link>
            <span
              className="delete-btn"
              onClick={(e) =>
                fetch(`/api/post/delete?id=${a._id.toString()}`, {
                  method: 'DELETE',
                }).then(() => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = 'none';
                  }, 700);
                })
              }
            >
              🗑
            </span>
            <p>1월 1일</p>
          </section>
        );
      })}
    </>
  );
}
