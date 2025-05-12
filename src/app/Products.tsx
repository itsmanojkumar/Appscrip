  'use client'
  import React, { useEffect, useState } from 'react';
  import './Products.css'
  import Image from 'next/image';

  interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

  function Products() {
    const [products, setProducts] = useState<Product[]>([]); // Use a proper type if available
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
          setProducts(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
      <>
      <div className='allproducts'>
        {products.length>0 && products.map((product) => (
          <div className='product' key={product.id}>
            <Image src={product.image} alt={product.title} height={224} width={168}/>
            <h3>{product.title}</h3>
            <button>Cart</button>
            {/* <p>{product.price}</p> */}
          </div>
        ))}
      </div>
    </>
    );
  }

  export default Products;
