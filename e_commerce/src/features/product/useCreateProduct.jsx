import { useState } from "react";
import axiosInstance from "../../libs/axios";
import { showAlert } from "../../components/elements/SweetAlert";

export const useCreateProduct = () => {
  const [state, setState] = useState({
    data: null,
    message: "",
    pending: true,
    error: null,
    status: "",
  });

  const createProduct = async (data) => {
    setState((prev) => ({ ...prev, pending: true, error: null }));

    try {
      const response = await axiosInstance.post("/products", data);
      const { message } = response.data;
      setState({
        data: response.data.data,
        message,
        pending: false,
        error: null,
        status: response.data.status,
      });

      await showAlert({
        title: "Berhasil!",
        message: "Produk berhasil dibuat.",
        icon: "success",
      });
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: err instanceof Error ? err : new Error("Gagal membuat produk"),
        message: "Gagal membuat produk",
      }));

      await showAlert({
        title: "Gagal!",
        message: "Gagal membuat produk.",
        icon: "error",
      });
    } finally {
      setState((prev) => ({
        ...prev,
        pending: false,
      }));
    }
  };

  return { ...state, createProduct };
};
