import { svgs } from "../../../assets/images/images";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, avatar, location, text, rating }) => {
  return (
    <div className='p-6 border border-dashed border-blink shadow-lg rounded-xl bg-black/40 text-white space-y-4'>
      <div className='flex items-start justify-between gap-4 flex-wrap'>
        {/* Левая часть - имя и локация */}
        <div className='flex items-center gap-4 flex-1 min-w-[200px]'>
          <img src={avatar} alt={name} className='w-12 h-12 rounded-full shrink-0' />
          <div>
            <h3 className='font-bold'>{name}</h3>
            <p className='text-sm text-gray-300'>{location}</p>
          </div>
        </div>

        {/* Правая часть - иконка твиттера */}
        <div className='shrink-0 mt-2 md:mt-0'>
          <img
            src={svgs.twit}
            alt='Twitter icon'
            className='w-6 h-6 md:w-8 md:h-8 object-contain'
          />
        </div>
      </div>

      {/* Рейтинг */}
      <div className='flex gap-1'>
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className='text-yellow-400' />
        ))}
      </div>

      {/* Текст отзыва */}
      <p className='text-sm text-gray-200'>{text}</p>
    </div>
  );
};

export default TestimonialCard;
