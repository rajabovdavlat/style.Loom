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
    <div className='container flex flex-col-reverse md:flex-row items-center justify-between select-none py-[4px] sm:py-[15px] md:py-[20px] gap-10'>
      <div className='w-full md:w-auto text-center md:text-left'>
        

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
    </div>
  );
};

export default ProductFilter;
