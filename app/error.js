'use client';
export default function Error({ error, reset }) {
  return (
    <>
      <h4>oh error</h4>
      <button
        onClick={() => {
          reset();
        }}
      >
        refresh
      </button>
    </>
  );
}
