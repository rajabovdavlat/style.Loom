// src/components/Shared/ProductsSection/ProductsSection.jsx
import { useState, useMemo } from "react";

// ⚠️ Используем твои уже существующие файлы из Home/LatestCollection
import ProductFilter from "../../../pages/Home/LatestCollection/ProductFilter";
import ProductCard from "../../../pages/Home/LatestCollection/ProductCard";
import { useProducts } from "../../../pages/Home/LatestCollection/useProducts";

const ProductsSection = ({
  title = "Elevate Your Style with Our Latest Collection",
  subtitle = "Each piece is crafted to enhance your fashion statement.",
  showHeader = true, // можно выключить заголовок на странице Products
}) => {
  const [selected, setSelected] = useState("all");
  const { products, loading, error } = useProducts();

  const filtered = useMemo(() => {
    if (selected === "all") return products;
    return products.filter((p) => p.category === selected);
  }, [selected, products]);

  if (error) {
    return (
      <section className="container py-16">
        <p className="text-center text-red-500">Failed to load products</p>
      </section>
    );
  }

  return (
    <section className="container py-16">
      {showHeader && (
        <>
          <h2 className="text-4xl font-bold mb-3">{title}</h2>
          <p className="text-gray-400 mb-8">{subtitle}</p>
        </>
      )}

      <ProductFilter selected={selected} setSelected={setSelected} />

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
