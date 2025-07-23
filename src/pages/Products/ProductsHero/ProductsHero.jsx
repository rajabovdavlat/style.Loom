import React from 'react'
import { svgs } from "../../../assets/images/images";


const ProductsHero = () => {
  return (
    <div className='container py-[80px]'>
      <div>
              <h2 className='text-6xl font-bold w-full max-w-[1210px]'>Explore the Latest Trends and Timeless Classics</h2>
              <img src={svgs.AnswerBgImg} alt="" />
      </div>
    </div>
  );
}

export default ProductsHero