import React from 'react'
import ProductsHero from './ProductsHero/ProductsHero'
import ProductsCollection from "./ProdutsCollection/ProductsCollection"
import ProductsAnswers from "./ProductsAnswers/ProductsAnswers";
import ProductsTestimonials from "./ProductsTestimonial/ProductsTestimonial";






const Products = () => {
  return (
    <div className='bg-dark text-title'>
      <ProductsHero />
      <ProductsCollection />
      <ProductsAnswers />
      <ProductsTestimonials />
    </div>
  )
}

export default Products