import { svgs } from "../../../assets/images/images";

const categories = [
  { label: "All", value: "all" },
  { label: "Men", value: "men's clothing" },
  { label: "Women", value: "women's clothing" },
  { label: "Jewelery", value: "jewelery" },
  { label: "Electronics", value: "electronics" },
];

const ProductFilter = ({ selected, setSelected }) => {
  return (
    <div className='container flex flex-col-reverse md:flex-row items-center justify-between select-none py-[4px] sm:py-[50px] md:py-[80px] gap-10'>
      <div className='w-full md:w-auto text-center md:text-left'>
        <h2 className='w-full font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl pb-[20px] sm:pb-[30px]'>
          Elevate Your Style with Our Latest Collection
        </h2>
        <p className='w-full max-w-[638px] mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-gray mb-[30px] sm:mb-[40px]'>
          Each piece is crafted to enhance your fashion statement.
        </p>

        <div className='flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4'>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelected(cat.value)}
              className={`btnFiltr border-blink text-xs sm:text-sm md:text-base px-3 py-1 sm:px-4 sm:py-2 ${
                selected === cat.value ? "active" : ""
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <img
        src={svgs.CollectionImg}
        alt='Decor'
        className='w-[200px] sm:w-[300px] md:w-[400px] h-auto object-contain select-none auto-pulse-glow hidden md:block'
      />
    </div>
  );
};

export default ProductFilter;
