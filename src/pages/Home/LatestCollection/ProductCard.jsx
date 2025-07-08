import { useCart } from "../../../context/CartContext";

import { FaShoppingCart } from "react-icons/fa";



const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className='bg-black/30 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-dashed hover:scale-105 transform transition-transform'>
      <div className='w-full h-[260px] flex items-center justify-center mb-4'>
        <img
          src={product.image}
          alt={product.title}
          className='max-h-full max-w-full object-contain'
        />
      </div>

      <h3 className='text-title font-bold text-md mb-2 line-clamp-2 mb-5'>
        {product.title}
      </h3>

      <div className='flex justify-between items-center'>
        <p className='text-2xl font-bold text-title'>${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className='text-title hover:text-black/60 bg-black/80 py-1.5 px-2.5 rounded-md hover:bg-desc  transition-colors'
        >
          <FaShoppingCart size={28}  className="text-2xl"/>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
