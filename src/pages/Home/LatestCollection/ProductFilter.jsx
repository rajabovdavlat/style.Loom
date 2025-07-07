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
    <div className='container flex items-center justify-between select-none py-[80px]'>
      <div>
        <h2 className='font-semibold text-6xl pb-[30px]'>
          Elevate Your Style with Our Latest Collection
        </h2>
        <p className='mb-[50px] text-lg text-gray'>
          Each piece is crafted to enhance your fashion statement.
        </p>

        <div className='flex gap-4'>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelected(cat.value)}
              className={`btnFiltr border-blink ${
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
        className='hidden md:block select-none auto-pulse-glow h-auto object-contain'
      />
    </div>
  );
};

export default ProductFilter;
