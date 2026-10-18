import React from 'react'

const   Product = async() => {
    try{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
  return (
   <div>{product.map(p => <ProductCard key={p.id} product={p} />)}</div>;
  )
}

export default Product
