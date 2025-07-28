import { useEffect, useState } from "react";
import axios from "axios";

export const useProductsMain = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") 
      .then((res) => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};
