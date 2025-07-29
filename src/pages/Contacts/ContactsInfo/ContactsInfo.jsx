import React from 'react'
import { svgs } from "../../../assets/images/images";


const ContactsInfo = () => {
  return (
      <div className='container py-10'>
            <div className='flex pb-[80px] justify-between items-center select-none'>
        <div>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-5.5'>
            Your Partner in Every Step of Your Fashion Journey.
          </h2>
          <p className='text-desc2 text-base sm:text-lg'>
            24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.
          </p>
        </div>
        <img
          src={svgs.Vector}
          alt='Картинка с миганием'
          className='hidden md:block select-none auto-pulse-glow h-auto object-contain '
        />
      </div>
      </div>
  )
}

export default ContactsInfo