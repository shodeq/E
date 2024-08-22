import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function DashboardProductCreate() {
    const [product, setProduct] = useState({ name: "", description: "", category: "", image: "", price: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        createProductData(product);
    };

    const createProductData = async (data) => {
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
            setMessage(result.message);
            setProduct({ name: "", description: "", category: "", image: "", price: "" });
        } catch (error) {
            setMessage('An error occurred while creating the product');
        }
    };

    return (
        <div className="relative p-4 m-6 bg-white shadow dark:bg-gray-800 sm:p-5 border rounded-lg dark:border-neutral-700">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-[1.2rem] font-semibold text-gray-900 dark:text-white">
                    Create Product
                </h3>
            </div>
            {message && <p className="mb-6">{message}</p>}
            <form action="#" onSubmit={submitHandler}>
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
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-transparent hover:border hover:border-blue-600 hover:text-blue-600 hover:bg-transparent"
                >
                    <FaPlus className="mr-2" /> Create new product
                </button>
            </form>
        </div>
    );
}
