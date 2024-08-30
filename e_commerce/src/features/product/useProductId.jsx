import { useEffect, useState } from "react";

export const useProductId = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await fetch(
              `http://localhost:2207/products/${id}?key=aldypanteq`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch product");
            }
            const result = await response.json();
            setProduct(result.data);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
        fetchProduct();
      }, [id]);

    return { product, loading, error };
}