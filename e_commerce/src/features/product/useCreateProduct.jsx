import { useState } from "react";
import Swal from "sweetalert2";

export const useCreateProduct = () => {
    const [product, setProduct] = useState();
    const [message, setMessage] = useState("");
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("");

    const createProduct = async (data) => {
        try {
            const response = await fetch("http://localhost:2207/products?key=aldypanteq", {
                method: "POST",
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
                text: "Product has been created successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to create product'));
            setMessage("Failed to create product");

            Swal.fire({
                title: "Error!",
                text: "Failed to create product.",
                icon: "error",
                confirmButtonText: "OK",
            });
        } finally {
            setPending(false);
        }
    };

    return { createProduct, product, pending, error, message, status };
}