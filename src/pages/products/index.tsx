// pages/products/index.tsx

import Link from 'next/link';
import React from 'react';

// Define the product type
interface Product {
  id: number;
  name: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', description: 'This is product 1' },
  { id: 2, name: 'Product 2', description: 'This is product 2' },
  { id: 3, name: 'Product 3', description: 'This is product 3' },
];

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        Go back to Home
      </Link>
    </div>
  );
}

export default ProductsPage;
