import React from 'react'

function Products() {
    const res= fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(data=>console.log(data));

  return (
    <div>Products</div>
  )
}

export default Products