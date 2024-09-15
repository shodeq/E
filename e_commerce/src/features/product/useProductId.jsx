import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axios";

export const useProductId = (id) => {
    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null,
        message: '',
        status: '',
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
              const response = await axiosInstance.get(`/products/${id}`);
              setState({
                data: response.data.data,
                loading: false,
                error: null,
                message: response.data.message,
                status: response.data.status
              })
            } catch (err) {
              setState(prev => ({
                ...prev, 
                loading: false, 
                error: err instanceof Error ? err : new Error('An error occurred while fetching the product'),
              }));
            } 
          };
          fetchProduct();
    }, [id]);
    return state;
}