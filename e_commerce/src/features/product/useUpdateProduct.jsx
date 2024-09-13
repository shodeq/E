import { useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "../../libs/axios/Index";

export const useUpdateProduct = () => {
  const [state, setState] = useState({
    product: { name: "", description: "", category: "", image: "", price: "" },
    pending: false,
    error: null,
    message: "",
    status: "",
  });

  const updateProduct = async (data, id) => {
    setState(prev => ({ ...prev, pending: true, error: null }));

    try {
      const response = await axiosInstance.put(`/products/${id}`, data)
      setState({
        data: response.data.data,
        message: response.data.message,
        pending: false, 
        error: null,
        status: response.data.status,
      });

      Swal.fire({
        title: "Success!",
        text: "Product has been updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        pending: false,
        error: err instanceof Error ? err : new Error("Failed to update product"),
        message: "Failed to update product",
      }));

      Swal.fire({
        title: "Error!",
        text: "Failed to update product.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return { ...state, updateProduct };
};
