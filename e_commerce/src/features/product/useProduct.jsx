import { useState, useEffect } from "react";
import axiosInstance from "../../libs/axios/Index";

export const useProducts = (limit, page) => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
    error: null,
    totalPages: 1,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const response = await axiosInstance.get(`/products`, {
          params: { limit, page },
        });
        setState({
          data: response.data.data.products,
          isLoading: false,
          error: null,
          totalPages: Math.ceil(response.data.data.total / limit),
        });
      } catch (error) {
        setState(prev => ({
            ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : "An error occurred",
          totalPages: 1,
        }));
      }
    };

    fetchProducts();
  }, [limit, page]);

  return state;
};
