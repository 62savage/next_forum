import { useRouter } from 'next/router';

export default function DetailLink() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push('/');
        }}
      >
        /
      </button>
      <button>
        onClick=
        {() => {
          router.back();
        }}
      </button>
    </div>
  );
}
