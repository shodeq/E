import { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from 'react-icons/io5';
import { TbEdit } from 'react-icons/tb';
import { FaTrashAlt } from 'react-icons/fa';
import { useDeleteProduct } from "../../../features/product/useDeleteProduct";
import { useProducts } from "../../../features/product/useProduct";

export default function DashboardProduct() {
    const [page, setPage] = useState(1);
    const limit = 10; 
    const [category, setCategory] = useState("");

    const { data: products, isLoading, error, totalPages } = useProducts(limit, page);

    const { deleteProduct } = useDeleteProduct();

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <section className="dark:bg-gray-transparent p-6 antialiased">
            <div className="flex flex-col dark:bg-gray-900">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border bg-white rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                <div className="flex-1 flex items-center space-x-2">
                                    <h5>
                                        <span className="text-gray-500 dark:text-gray-400">All Products: </span>
                                        <span className="dark:text-white">{products.length}</span>
                                    </h5>
                                    <h5 className="text-gray-500 dark:text-gray-400 ml-1">
                                        Showing {(page - 1) * limit + 1} - {Math.min(page * limit, products.length)} of {products.length}
                                    </h5>
                                </div>
                                <div className="flex-shrink-0 flex flex-col items-start md:flex-row md:items-center lg:justify-end space-y-3 md:space-y-0 md:space-x-3">
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="flex-shrink-0 inline-flex items-center justify-center py-2 px-3 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600"
                                    >
                                        <option value="">Category</option>
                                        <option value="Category1">Category 1</option>
                                        <option value="Category2">Category 2</option>
                                        <option value="Category3">Category 3</option>
                                    </select>
                                    <form>
                                        <div className="relative">
                                            <input
                                                type="search"
                                                id="search"
                                                className="block w-full py-2 px-4 text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 dark:focus:ring-primary-500 focus:border-primary-500 dark:focus:border-primary-500 dark:placeholder-gray-400"
                                                placeholder="Search"
                                                required
                                            />
                                            <button
                                                type="submit"
                                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-500 dark:text-gray-400"
                                            >
                                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 110 14 7 7 0 010-14zm0 0l-4 4m4-4l4 4" />
                                                </svg>
                                                <span className="sr-only">Search</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-gray-100 dark:bg-neutral-700">
                                        <tr>
                                            <th scope="col" className="py-3 px-10 pe-0">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="hs-table-pagination-checkbox-all"
                                                        type="checkbox"
                                                        className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    />
                                                    <label htmlFor="hs-table-pagination-checkbox-all" className="sr-only">Checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-10 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Name</th>
                                            <th scope="col" className="px-12 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Category</th>
                                            <th scope="col" className="px-14 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Description</th>
                                            <th scope="col" className="px-16 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Price</th>
                                            <th scope="col" className="px-18 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {isLoading ? (
                                            <tr>
                                                <td colSpan="5" className="py-3 text-center">Loading...</td>
                                            </tr>
                                        ) : error ? (
                                            <tr>
                                                <td colSpan="5" className="py-3 text-center text-red-500">Error: {error}</td>
                                            </tr>
                                        ) : products.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" className="py-3 text-center text-gray-500">No products found.</td>
                                            </tr>
                                        ) : (
                                            products.map((product) => (
                                                <tr key={product.id}>
                                                    <td className="py-3 ps-10">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id={`hs-table-pagination-checkbox-${product.id}`}
                                                                type="checkbox"
                                                                className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                            />
                                                            <label htmlFor={`hs-table-pagination-checkbox-${product.id}`} className="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{product.name}</td>
                                                    <td className="px-12 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{product.category}</td>
                                                    <td className="px-14 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{product.description}</td>
                                                    <td className="px-16 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${product.price}</td>
                                                    <td className="px-18 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className="flex items-center space-x-4">
                                                            <Link
                                                                to={`/dashboard/update/${product.id}`}
                                                                className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr"
                                                            >
                                                                <TbEdit className="mr-1" />
                                                                Update
                                                            </Link>
                                                            <Link
                                                                to={`/dashboard/detail/${product.id}`}
                                                                className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                            >
                                                                <IoEyeSharp className="mr-1" />
                                                                Detail
                                                            </Link>
                                                            <button
                                                                type="button"
                                                                onClick={() => deleteProduct(product.id)}
                                                                className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                                            >
                                                                <FaTrashAlt className="mr-1" />
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-3 px-4 flex items-center justify-between">
                                <nav className="inline-flex items-center -space-x-px">
                                    <button
                                        type="button"
                                        onClick={() => handlePageChange(page - 1)}
                                        disabled={page === 1}
                                        className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        aria-label="Previous"
                                    >
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </button>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => handlePageChange(i + 1)}
                                            className={`p-2.5 min-w-[40px] flex justify-center items-center py-2.5 text-sm rounded-full ${page === i + 1
                                                ? 'bg-blue-500 text-white dark:bg-blue-500 dark:text-white'
                                                : 'text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => handlePageChange(page + 1)}
                                        disabled={page === totalPages}
                                        className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        aria-label="Next"
                                    >
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
