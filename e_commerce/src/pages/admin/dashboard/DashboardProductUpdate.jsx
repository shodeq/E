import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useProductId } from "../../../features/product/useProductId";
import { useUpdateProduct } from "../../../features/product/useUpdateProduct";

export default function DashboardProductUpdate() {
    const { id } = useParams();
    const { product } = useProductId(id);
    const { updateProduct, message } = useUpdateProduct();
    const navigate = useNavigate();
    const [updateProductData, setUpdateProductData] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        image: "",
    });

    useEffect(() => {
        if (product) {
            setUpdateProductData(product);
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateProductData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await updateProduct(updateProductData);
        navigate("/dashboard/product");
    };

    return (
        <div className="p-6">
            <div className="relative p-4 bg-white shadow dark:bg-gray-900 sm:p-5 border rounded-lg dark:border-neutral-700">
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 className="text-[1.2rem] font-semibold text-gray-900 dark:text-white">
                        Update Product
                    </h3>
                </div>
                {message && <p className="mb-6">{message}</p>}
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col gap-4 mb-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                                onChange={handleChange}
                                value={updateProductData.name}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="$2999"
                                onChange={handleChange}
                                value={updateProductData.price}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type category"
                                onChange={handleChange}
                                value={updateProductData.category}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Write description here"
                                onChange={handleChange}
                                value={updateProductData.description}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                            <input
                                type="text"
                                name="image"
                                id="image"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Image URL"
                                onChange={handleChange}
                                value={updateProductData.image}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-transparent hover:border hover:border-blue-600 hover:text-blue-600 hover:bg-transparent"
                    >
                        <FaEdit className="mr-2" /> Update Product
                    </button>
                </form>
            </div>
        </div>
    );
}
