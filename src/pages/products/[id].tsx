// pages/products/[id].tsx

import { useRouter } from 'next/router';
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

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // Ensure id is a string and parse it to a number
  const product = products.find(p => p.id === parseInt(id as string, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <Link href="/products">
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetailPage;
