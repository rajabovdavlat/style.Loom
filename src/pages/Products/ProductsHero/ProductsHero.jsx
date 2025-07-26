import React from 'react'
import { svgs } from "../../../assets/images/images";


const ProductsHero = () => {
  return (
    <div className='container py-[80px]'>
      <div className='flex'>
        <div>
       <h2 className='w-full font-semibold text-4xl sm:text-5xl md:text-6xl pt-20   pb-[35px] select-none'>Explore the Latest Trends and Timeless Classics</h2>
        <p className=' text-base sm:text-lg text-gray select-none'>Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics</p>
      </div>
        <img src={svgs.prheroimg} alt="" className='hidden md:block select-none auto-pulse-glow h-auto object-contain' />
      </div>
    </div>
  );
}

export default ProductsHero