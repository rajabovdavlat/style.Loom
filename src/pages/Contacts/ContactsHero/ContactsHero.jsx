import React from 'react';
import { ShoppingCart, PackageCheck } from 'lucide-react';
import { svgs } from '../../../assets/images/images';

const ContactsHero = () => {
  return (
 <div className="container py-10">
 <div className="flex flex-col gap-6 sm:gap-10 md:flex-row justify-between items-start md:items-center">
        {/* Left  */}
        <div>
          <h2 className="text-white font-semibold text-3xl sm:text-4xl md:text-6xl leading-tight select-none">
            Elegant Evening Gown
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-3">
            <p className="text-base sm:text-lg text-gray-400 select-none">
              Fitted bodice, flowing skirt
            </p>
            <span className="text-green-500 w-[100px] text-center text-sm sm:text-base font-medium bg-green-100 px-3 py-1 rounded-full">
              In stock
            </span>
          </div>
        </div>

        {/* right  */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-0">
          {/* btn Add to cart */}
          <button className="flex items-center justify-center gap-2 bg-[#1F1F1F] text-white px-5 py-2 rounded-md text-sm sm:text-base">
            <ShoppingCart size={18} />
            Add To Cart
          </button>

          {/* btn Shop now */}
          <button className="flex items-center justify-center gap-2 bg-[#AB9C87] text-black px-5 py-2 rounded-md text-sm sm:text-base">
            <PackageCheck size={18} />
            Shop Now
          </button>
        </div>
  </div>
          
  <div className='flex flex-col lg:flex-row items-center gap-6'>
  <img
    src={svgs.ProductImg}
    alt="Product"
    className='w-full max-w-[988px] object-contain select-none'
  />
  
  <div className='flex flex-col gap-12 w-full max-w-[518px]'>
    <img
      src={svgs.ProductImg2}
      alt="Product"
      className='w-full object-contain select-none'
    />
    <img
      src={svgs.ProductImg3}
      alt="Product"
      className='w-full object-contain select-none'
    />
  </div>
  </div>
  </div>
  );
};

export default ContactsHero;

