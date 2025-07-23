import { heroArrowImage, homeImages } from "../home.data/home-imge";
import { heroStats } from "../home.data/home.stats";

const categories = ["All", "Mens", "Womens", "Kids"];

const HeroSection = () => {
  return (
    <div>
      {/* Hero Image и кнопка */}
      <div className='pt-[60px] relative'>
        <img
          src={homeImages.heroImg}
          alt='Рекламный баннер'
          className='w-full h-full object-cover'
        />
        <div className='absolute -bottom-[6px] sm:-bottom-[16px] md:-bottom-[24px] left-1/2 transform -translate-x-1/2'>
          <button
            className='
              flex items-center gap-1
              px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2
              text-[9px] sm:text-xs md:text-sm lg:text-base
              bg-[#404040] text-title rounded-xl cursor-pointer
              transition-transform duration-200 ease-in-out
              hover:scale-105 active:scale-90
            '
          >
            Shop Now
            <img
              src={heroArrowImage.heroArrow}
              alt='arrow'
              className='w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5'
            />
          </button>
        </div>
      </div>

      {/* Контейнер с фильтрами и статистикой */}
      <div className='container flex flex-col lg:flex-row pb-16 gap-8'>
        {/* Левая часть: фильтры и текст */}
        <div className='flex-1 order-1'>
          <div className='pt-[80px] pb-[30px] flex gap-4 select-none'>
            {categories.map((cat) => (
              <button key={cat} className='btnFiltr border-blink'>
                {cat}
              </button>
            ))}
          </div>
          <div className='pb-[40px]'>
            <h2 className='w-full max-w-[638px] font-semibold text-4xl sm:text-5xl md:text-6xl pb-[30px]'>
              Elevate Your Style with StyleLoom
            </h2>
            <p className='w-full max-w-[638px] text-base sm:text-lg text-gray'>
              Explore a world of fashion at StyleLoom, where trends meet
              affordability. Immerse yourself in the latest styles and seize
              exclusive promotions.
            </p>
          </div>
        </div>

        {/* Правая часть: статистика */}
        <div className='flex-1 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 pt-2 select-none'>
          {heroStats.map((item, i) => (
            <div
              key={i}
              className='text-center border-2 border-dashed bg-black/20 rounded-xl py-12 border-desc'
            >
              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-title transform transition-transform duration-300 hover:scale-115'>
                {item.number}
              </h1>
              <p className='text-desc text-sm sm:text-base'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
