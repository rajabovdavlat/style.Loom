
import { useCart } from "../../context/CartContext";

const Basket = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="bg-dark">
    <div className='container py-16'>
      <h2 className='text-6xl text-center text-title  pb-10  font-bold mb-8'>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className='text-gray-400'>Your cart is empty.</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {cart.map((product) => (
            <div
              key={product.id}
              className='bg-black/30 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-dashed hover:scale-105 transform transition-transform'
            >
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-[200px] object-contain mb-4'
              />
              <h3 className='text-title text-xl font-bold mb-2 line-clamp-2'>
                {product.title}
              </h3>
              <p className='text-title mb-4 font-bold text-3xl'>
                ${product.price}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                className='text-lg bg-title font-bold py-1 px-1 rounded hover:text-title hover:bg-red-400 text-red-400 '
              >
                Delete
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
