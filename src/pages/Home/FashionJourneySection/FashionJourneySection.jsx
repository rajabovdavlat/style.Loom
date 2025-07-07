import { svgs } from "../../../assets/images/images";
import { FashhionData } from "../home.data/FashionJourney";

const FashionJourneySection = () => {
  return (
    <div className=' container'>
      <div className='flex pb-[80px] justify-between items-center select-none'>
        <div>
          <h2 className='text-5xl font-bold mb-5.5'>
            Navigating the StyleLoom Fashion Journey.
          </h2>
          <p className='text-desc2 text-lg'>
            At StyleLoom, we've designed a straightforward shopping experience
            to make fashion accessible.
          </p>
        </div>
        <img
          src={svgs.AbstractFshSect}
          alt='Катинка с миганием'
          className='hidden md:block select-none auto-pulse-glow h-auto object-contain '
        />
      </div>

      {/* статистика */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-[100px] select-none'>
        {FashhionData.map((feature, index) => (
          <div
            key={index}
            className='border-dashed hover:border-none border p-6 sm:p-8 lg:p-[50px] rounded-lg bg-black/20 transition-all duration-200  border-blink drop-shadow-xl/50 ease-in-out hover:scale-105 hover:bg-black/30'
          >
            <span className='text-lg md:text-xl font-semibold text-desc2 mb-4 block'>
              {feature.Number}
            </span>
            <h3 className='text-title font-bold text-xl md:text-2xl mb-3'>
              {feature.title}
            </h3>
            <p className='text-desc2 text-sm md:text-md w-full max-w-[299px]'>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionJourneySection;
