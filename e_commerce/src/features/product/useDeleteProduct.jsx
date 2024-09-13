import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axiosInstance from "../../libs/axios/Index";

export const useDeleteProduct = () => {
  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axiosInstance.delete(`/products/${id}`);
        if (response.status !== 200) {
          throw new Error("Failed to delete product");
        }
        await Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
        navigate("/dashboard/product");
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err instanceof Error ? err.message : "An error occurred",
        icon: "error",
      });
    }
  };

  return { deleteProduct };
};
