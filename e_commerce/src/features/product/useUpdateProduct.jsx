import { useState } from "react";
import Swal from "sweetalert2";

export const useUpdateProduct = () => {
    const [product, setProduct] = useState({ name: "", description: "", category: "", image: "", price: "" });
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const updateProduct = async (data) => {
        try {
            const response = await fetch(`http://localhost:2207/products/${data.id}?key=aldypanteq`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    price: Number(data.price),
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setProduct(result.data);
            setStatus(result.status);
            setMessage(result.message);
            Swal.fire({
                title: "Success!",
                text: "Product has been updated successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to update product'));
            setMessage("Failed to update product");
            Swal.fire({
                title: "Error!",
                text: "Failed to update product.",
                icon: "error",
                confirmButtonText: "OK",
            });
        } finally {
            setPending(false);
        }
    };

    return { updateProduct, product, pending, error, message, status };
}