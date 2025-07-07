import { useState } from "react";
import { useProducts } from "./useProducts"; 
import ProductCard from "./ProductCard"; 
import ProductFilter from "./ProductFilter"; 

const LatestCollection = () => {
  const [selected, setSelected] = useState("all");
  const { products, loading } = useProducts();

  // Фильтрация товаров
const filtered =
  selected === "all"
    ? products
    : products.filter((p) => p.category === selected);



  return (
    <div className='container py-16'>
      <ProductFilter selected={selected} setSelected={setSelected} />

      {/* Список продуктов */}
      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestCollection;
