import { useState } from "react";
import axiosInstance from "../../libs/axios";
import { showAlert } from "../../components/elements/SweetAlert";

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
      const response = await axiosInstance.put(`/products/${id}`, data);
      const { message } = response.data;
      setState({
        product: response.data.data,
        message,
        pending: false,
        error: null,
        status: response.data.status,
      });

      await showAlert({
        title: "Berhasil!",
        message: "Produk berhasil diperbarui.",
        icon: "success",
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        pending: false,
        error: err instanceof Error ? err : new Error("Gagal memperbarui produk"),
        message: "Gagal memperbarui produk",
      }));

      await showAlert({
        title: "Gagal!",
        message: "Gagal memperbarui produk.",
        icon: "error",
      });
    }
  };

  return { ...state, updateProduct };
};
