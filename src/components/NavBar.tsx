// components/NavBar.tsx

import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link href="/products">
        Products
      </Link>
      <Link href="/checkout">
        checkout
      </Link>
      <Link href="/payment">
        payment
      </Link>
    </nav>
  );
}

export default NavBar;
