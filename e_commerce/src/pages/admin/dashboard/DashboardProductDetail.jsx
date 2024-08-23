import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";
import Swal from "sweetalert2";

export default function DashboardProductDetail() {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

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

  if (!product) return <div>No Product Found</div>;

  return (
    <div className="p-6 h-screen">
      <section className="relative p-8 bg-white dark:bg-gray-900 border rounded-lg dark:border-neutral-700">
      <nav className="text-sm mb-6 text-gray-500">
        <button
          onClick={() => navigate("/dashboard/product")}
          className="flex items-center text-gray-400 hover:text-blue-700"
        >
          <IoArrowBack className="mr-1 text-lg" />
          <span>Back</span>
        </button>
      </nav>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.name}
            className="w-full h-[28rem] object-cover rounded-xl"
          />
        </div>

        <div className="lg:w-1/2 lg:ml-8">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-bold dark:text-neutral-200">
              {product.name}
            </h1>
          </div>
          <p className="text-blue-600 mb-4">{product.category}</p>
          <p className="text-sm text-gray-600 mb-6">{product.description}</p>
          <p className="text-sm text-gray-600">Price</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">
            ${product.price}
          </p>

          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => navigate(`/dashboard/product/edit/${id}`)}
              className="flex-1 py-3 bg-blue-50 text-blue-600 rounded-[2.5rem] font-semibold hover:bg-blue-100 flex items-center justify-center"
            >
              <TbEdit className="mr-2 text-lg" />
              Update
            </button>
            <button
              onClick={deleteHandler}
              className="flex-1 py-3 bg-red-50 text-red-600 rounded-[2.5rem] font-semibold hover:bg-red-100 flex items-center justify-center"
            >
              <FaTrashAlt className="mr-2 text-lg" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
