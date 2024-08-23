import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";
import Swal from "sweetalert2";

export default function DashboardProductDetail() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:2207/products/${id}?key=aldypanteq`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const result = await response.json();
        setProduct(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  const deleteHandler = async () => {
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
        const response = await fetch(
          `http://localhost:2207/products/${id}?key=aldypanteq`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
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

  if (!product.name) return <div>No Product Found</div>;

  return (
    <div className="p-6">
      <div className="relative bg-white dark:bg-gray-900 border rounded-lg dark:border-neutral-700">
        <button
          onClick={() => navigate("/dashboard/product")}
          className="absolute top-4 left-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <IoArrowBack className="text-gray-700 dark:text-gray-300" />
        </button>
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
            {product.name}
          </h2>
          <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">
            ${product.price}
          </p>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Description
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              {product.description}
            </dd>
          </dl>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Category
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              {product.category}
            </dd>
          </dl>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <TbEdit className="mr-1 text-lg" />
              Update
            </button>
            <button
              type="button"
              onClick={deleteHandler}
              className="inline-flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              <FaTrashAlt className="mr-1 text-lg" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
