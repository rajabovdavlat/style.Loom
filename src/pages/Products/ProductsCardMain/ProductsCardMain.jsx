import { useCart } from "../../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-black/30 rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-dashed hover:scale-105 transform transition-transform">
      <div className="w-full h-[200px] sm:h-[260px] flex items-center justify-center mb-3 sm:mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="text-title font-bold text-sm sm:text-md mb-2 sm:mb-5 line-clamp-2">
        {product.title}
      </h3>

      <div className="flex justify-between items-center">
        <p className="text-xl sm:text-2xl font-bold text-title">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="text-title hover:text-black/60 bg-black/80 py-1 px-2 sm:py-1.5 sm:px-2.5 rounded-md hover:bg-desc transition-colors"
        >
          <FaShoppingCart size={24} className="sm:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;