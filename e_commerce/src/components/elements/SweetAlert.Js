import Swal from "sweetalert2";

export const showAlert = async ({
  title = "",
  message = "",
  icon = "success",
  confirmButtonText = "OK",
  showCancelButton = false, 
  cancelButtonText = "Cancel", 
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

  return result; 
};
