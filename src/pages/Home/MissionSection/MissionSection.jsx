import { MissionData } from "../homeMission";
import { svgs } from "../../../assets/images/images";

const MissionSection = () => {
  return (
    <div className='container py-[110px] borTop'>
      {/* title */}
      <div className='pl-8'>
        <h2 className='w-full  text-6xl pb-[30px] select-none'>
          Crafting Trends, Inspiring Confidence
        </h2>
        <p className='w-full max-w-[638px] text-lg text-gray select-none'>
          Explore a world of fashion at StyleLoom, where trends meet
          affordability.
        </p>
      </div>

      {/* mission */}
      <section className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 py-16 select-none'>
        {MissionData.map((feature, index) => (
          <div
            key={index}
            className='relative bg-[#1a1a1a] hover:bg-black/20 rounded-lg p-6 border-blink hover:border-none border border-dashed border-title hover:scale-105 transition-transform duration-300'
          >
            <img
              src={feature.bgIcon}
              alt='задний фон img'
              className='absolute top-1 right-1 '
            />
            <img src={feature.icon} alt='icon' className='w-14 h-14 mb-4' />
            <h3 className='text-white text-xl font-semibold mb-2'>
              {feature.title}
            </h3>
            <p className='text-gray-400 text-sm leading-relaxed w-full max-w-[326px]'>
              {feature.desc}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MissionSection;
