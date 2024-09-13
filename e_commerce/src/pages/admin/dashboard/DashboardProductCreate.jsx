import { useNavigate } from "react-router-dom";
import { useCreateProduct } from "../../../features/product/useCreateProduct";
import { FaPlus } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function DashboardProductCreate() {
  const { createProduct } = useCreateProduct();
  const navigate = useNavigate();

  const ProductSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimal 3 characters")
      .max(16, "Maximum 16 characters")
      .required("Required"),
    price: Yup.string()
      .min(0, "Price must be greater than or equal to 0")
      .required("Required"),
    category: Yup.string()
      .optional(),
    description: Yup.string()
      .min(3, "Minimal 3 characters")
      .max(35, "Maximum 35 characters")
      .required("Required"),
    image: Yup.string().url("Invalid URL").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
    },
    validationSchema: ProductSchema,
    onSubmit: (values, { resetForm }) => {
      createProduct({...values, price: Number(values.price)});
      resetForm();
      navigate("/dashboard/product");
    },
  });

  return (
    <div className="p-6">
      <div className="relative p-4 bg-white shadow dark:bg-gray-900 sm:p-5 border rounded-lg dark:border-neutral-700">
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 className="text-[1.2rem] font-semibold text-gray-900 dark:text-white">
            Create Product
          </h3>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name && (
                <div className="text-red-500">{formik.errors.name}</div>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Price"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
              {formik.errors.price && formik.touched.price && (
                <div className="text-red-500">{formik.errors.price}</div>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type category"
                onChange={formik.handleChange}
                value={formik.values.category}
              />
              {formik.errors.category && formik.touched.category && (
                <div className="text-red-500">{formik.errors.category}</div>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write description here"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.errors.description && formik.touched.description && (
                <div className="text-red-500">{formik.errors.description}</div>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Image
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Image URL"
                onChange={formik.handleChange}
                value={formik.values.image}
              />
              {formik.errors.image && formik.touched.image && (
                <div className="text-red-500">{formik.errors.image}</div>
              )}
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
    </div>
  );
}
