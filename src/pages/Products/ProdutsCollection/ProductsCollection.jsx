import { useState } from "react";
import { useProductsMain } from "../useProductsMain";
import ProductCardMain from "../ProductsCardMain/ProductsCardMain";
import ProductFilterMain from "../ProductsFilterMain/ProductsFilterMain";

const LatestCollection = () => {
  const [selected, setSelected] = useState("all");
  const { products, loading } = useProductsMain();

  // Фильтрация товаров по категории
  const filtered =
    selected === "all"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <div className="container py-16">
      <ProductFilterMain selected={selected} setSelected={setSelected} />

      {/* Список продуктов */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCardMain key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestCollection;
