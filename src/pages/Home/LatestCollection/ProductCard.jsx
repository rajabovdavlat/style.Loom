import { useCart } from "../../../context/CartContext";

import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className='bg-[#1a1a1a] rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700 hover:scale-105 transform transition-transform'>
      <div className='w-full h-[260px] flex items-center justify-center mb-4'>
        <img
          src={product.image}
          alt={product.title}
          className='max-h-full max-w-full object-contain'
        />
      </div>

      <h3 className='text-white font-semibold text-md mb-2 line-clamp-2 h-[48px]'>
        {product.title}
      </h3>

      <div className='flex justify-between items-center'>
        <p className='text-lg font-bold text-white'>${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className='text-white hover:text-green-400 transition-colors'
        >
          <FaShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
