import { useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/axios";
import { showAlert } from "../../components/elements/SweetAlert";

export const useDeleteProduct = () => {
  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    // Menampilkan konfirmasi sebelum menghapus
    const result = await showAlert({
      title: "Apakah Anda yakin?",
      message: "Anda tidak bisa mengembalikan produk ini!",
      icon: "warning", // Menampilkan ikon konfirmasi
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        const response = await axiosInstance.delete(`/products/${id}`);
        const { message } = response.data;

        // Menampilkan notifikasi sukses
        await showAlert({
          title: "Berhasil!",
          message,
          icon: "success",
        });

        navigate('/dashboard/product');
        window.location.reload(); // Jika perlu reload halaman setelah delete
      } catch (error) {
        console.error(error);

        // Menampilkan notifikasi error
        await showAlert({
          title: "Gagal!",
          message: "Gagal menghapus produk.",
          icon: "error",
        });
      }
    }
  };

  return { deleteProduct };
};
