import { svgs } from "../../../assets/images/images";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, avatar, location, text, rating }) => {
  return (
    <div className='p-6 border border-dashed  border-blink shadow-lg rounded-xl bg-black/40 text-white space-y-4'>
      <div className='flex items-center gap-4'>
        <img src={avatar} alt={name} className='w-12 h-12 rounded-full' />
        <div className="flex gap-55">
          <div>
            <h3 className='font-bold'>{name}</h3>
            <p className='text-sm text-gray-300'>{location}</p>
          </div>
          <img src={svgs.twit} alt='twiter' />
        </div>
      </div>

      <div className='flex gap-1'>
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className='text-yellow-400' />
        ))}
      </div>

      <p className='text-sm text-gray-200'>{text}</p>
    </div>
  );
};

export default TestimonialCard;
