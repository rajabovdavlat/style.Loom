import React from 'react'
import ProductsHero from './ProductsHero/ProductsHero'
import ProductsCollection from "./ProdutsCollection/ProductsCollection"

const Products = () => {
  return (
    <div className='bg-dark text-title'>
      <ProductsHero />
      <ProductsCollection />
    </div>
  )
}

export default Products