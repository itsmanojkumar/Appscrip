  'use client'
  import React, { useEffect, useState } from 'react';
  import './Products.css'

  function Products() {
    const [products, setProducts] = useState<any[]>([]); // Use a proper type if available
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
            <img src={product.image} alt={product.title} className='productimage' />
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
