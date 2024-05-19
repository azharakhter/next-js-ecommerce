// pages/index.js

import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My E-commerce Site</h1>
      <p>This is the home page.</p>
      <Link href="/products">
        Go to Products
      </Link>
    </div>
  );
}
