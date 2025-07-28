import React from 'react'
import { svgs } from "../../../assets/images/images";


const ProductsHero = () => {
  return (
    <div className='container sm:py-[35px] py-[5px]'>
      <div className='flex'>
        <div>
       <h2 className='w-full font-semibold text-4xl sm:text-5xl md:text-6xl sm:pt-[70px] md:pt-[40px] pt-[20px] sm:mb-[25px] mb-[5px] select-none'>Explore the Latest Trends and Timeless Classics</h2>
        <p className=' text-base sm:text-lg text-gray select-none'>Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics</p>
      </div>
        <img src={svgs.prheroimg} alt="" className='hidden md:block select-none auto-pulse-glow h-auto object-contain' />
      </div>
    </div>
  );
}

export default ProductsHero