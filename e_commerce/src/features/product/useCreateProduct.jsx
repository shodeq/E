import { useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "../../libs/axios/Index";

export const useMutationCreateProduct = () => {
  const [state, setState] = useState({
    data: null,
    message: "",
    pending: true,
    error: null,
    status: "",
  });

  const mutate = async (data) => {
    setState((prev) => ({ ...prev, pending: true, error: null }));

    try {
      const response = await axiosInstance.post("/products", data)
      setState({
        data: response.data.data,
        message: response.data.message,
        pending: false, 
        error: null,
        status: response.data.status,
      });

      Swal.fire({
        title: "Success!",
        text: "Product has been created successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: err instanceof Error ? err : new Error("Failed to create product"),
        message: "Failed to create product",
      }));

      Swal.fire({
        title: "Error!",
        text: "Failed to create product.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setState((prev) => ({
        ...prev,
        pending: false,
      }));
    }
  };

  return { ...state, mutate };
};

