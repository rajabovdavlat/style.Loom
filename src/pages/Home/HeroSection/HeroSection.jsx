import { heroArrowImage, homeImages } from "../home-imge";
import { heroStats } from "../home.stats"; // путь от компонента

const categories = ["All", "Mens", "Womens", "Kids"];

const HeroSection = () => {
  return (
    <>
      <div>
        <div className='pt-[60px] relative'>
          <img
            src={homeImages.heroImg}
            alt='Рекламный баннер'
            className='w-full h-full object-cover'
          />
          <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2'>
            <button className='arrowBtn active:scale-95 transition transform'>
              Shop Now
              <img
                src={heroArrowImage.heroArrow}
                alt='arrow'
                className=' w-4 h-4 md:w-6 md:h-6'
              />
            </button>
          </div>
        </div>

        <div className='flex borBottom'>
          {/* Фильтр */}

          <div className='container select-none'>
            <div className=' pt-[80px] pb-[30px] flex  gap-4 '>
              {categories.map((cat) => (
                <button key={cat} className='btnFiltr'>
                  {cat}
                </button>
              ))}
            </div>
            <div className='pb-[183px]'>
              <h2 className='w-full max-w-[638px] text-6xl pb-[30px]'>
                Elevate Your Style with StyleLoom
              </h2>
              <p className='w-full max-w-[638px] text-lg text-gray'>
                Explore a world of fashion at StyleLoom, where trends meet
                affordability. Immerse yourself in the latest styles and seize
                exclusive promotions.
              </p>
            </div>
          </div>

          {/* Статистика hero */}

          <div className='grid grid-cols md:grid-cols-2 gap-6 container py-16 select-none '>
            {heroStats.map((item, i) => (
              <div
                key={i}
                className='text-center transform transition-transform duration-300 hover:scale-105 '
              >
                <h1 className='text-6xl font-bold text-title'>{item.number}</h1>
                <p className='text-desc'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
