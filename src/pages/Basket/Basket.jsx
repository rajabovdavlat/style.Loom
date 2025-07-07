
import { useCart } from "../../context/CartContext";

const Basket = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="bg-dark">
    <div className='container py-16'>
      <h2 className='text-3xl font-semibold mb-8'>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className='text-gray-400'>Your cart is empty.</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {cart.map((product) => (
            <div
              key={product.id}
              className='bg-[#1a1a1a] p-4 rounded-lg border border-gray-700'
            >
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-[200px] object-contain mb-4'
              />
              <h3 className='text-white text-lg mb-2 line-clamp-2'>
                {product.title}
              </h3>
              <p className='text-gray-300 mb-4 font-semibold'>
                ${product.price}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                className='text-sm text-red-400 hover:underline'
              >
                Dalete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Basket;
