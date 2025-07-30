import React from 'react'
import { svgs } from '../../../assets/images/images'

const ContactInfoPage = () => {
  return (
 <div className='container py-20'>
  <div>
     <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-1.1 text-center sm:3.3 md:5.5'>Contact Information</h2>
     </div>
 <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center py-10">
  {/* Блок 1 */}
 <div className="flex flex-col items-center gap-45 md:flex-row md:justify-center py-10">
  {/* Блок 1 */}
  <div className="flex flex-col items-center text-center gap-2 md:gap-4">
    <img src={svgs.ContactImg1} alt="Email Icon" className="w-24 h-24" />
    <p className="text-lg font-semibold">Email</p>
    <button className="text-gray text-lg font-medium active:scale-95 transition-transform duration-150">
      support@StyleLoom.com
    </button>
  </div>

  {/* Блок 2 */}
  <div className="flex flex-col items-center text-center gap-4">
    <img src={svgs.ContactImg2} alt="Phone Icon" className="w-24 h-24" />
    <p className="text-lg font-semibold">Phone</p>
    <button className="text-gray text-lg font-medium active:scale-95 transition-transform duration-150">
      +123 456 7890
    </button>
  </div>

  {/* Блок 3 */}
  <div className="flex flex-col items-center text-center gap-4">
    <img src={svgs.ContactImg3} alt="Location Icon" className="w-24 h-24" />
    <p className="text-lg font-semibold">Location</p>
    <button className="text-gray text-lg font-medium active:scale-95 transition-transform duration-150">
      123 Style St, Fashion City
    </button>
  </div>
</div>

</div>

    </div>
  )
}

export default ContactInfoPage