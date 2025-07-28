import { useCart } from "../../context/CartContext";

const Basket = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-dark min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl sm:text-5xl font-bold text-center mb-10">
          🛒 Your Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">
            Your cart is currently empty.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="bg-black/30 border border-dashed border-gray-600 rounded-xl p-4 shadow-md hover:shadow-lg transition-transform hover:scale-[1.03]"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[200px] object-contain mb-4 rounded"
                  />
                  <h3 className="text-white text-xl font-semibold mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-white font-bold text-xl mb-3">
                    ${product.price}
                  </p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-black/20 p-6 rounded-xl border border-gray-700 max-w-xl mx-auto text-white">
              <div className="flex justify-between text-2xl font-semibold mb-6">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded transition"
                onClick={() => alert("Checkout functionality coming soon!")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;


