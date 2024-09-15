// components/elements/SweetAlert.js
import Swal from "sweetalert2";

export const showAlert = async ({
  title = "",
  message = "",
  icon = "success", // Bisa "success", "error", "warning" (untuk konfirmasi)
  confirmButtonText = "OK",
  showCancelButton = false, // Tampilkan tombol batal hanya untuk konfirmasi
  cancelButtonText = "Cancel", // Untuk konfirmasi
}) => {
  const result = await Swal.fire({
    title,
    text: message,
    icon,
    showCancelButton,
    confirmButtonText,
    cancelButtonText,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  });

  return result; // Untuk konfirmasi, kita perlu hasilnya (isConfirmed atau tidak)
};
