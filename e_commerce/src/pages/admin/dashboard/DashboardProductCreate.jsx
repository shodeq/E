import { useNavigate } from "react-router-dom";
import { useCreateProduct } from "../../../features/product/useCreateProduct";
import { FaPlus } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputGroup from "../../../components/fragments/dashboard/InputGroup";

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
             <InputGroup label="Name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>
              {formik.errors.name && formik.touched.name && (
                <div className="text-red-500">{formik.errors.name}</div>
              )}
            </div>

            <div>
              <InputGroup label="Price" name="price" type="number" value={formik.values.price} onChange={formik.handleChange}/>
              {formik.errors.price && formik.touched.price && (
                <div className="text-red-500">{formik.errors.price}</div>
              )}
            </div>

            <div>
              <InputGroup label="Category" name="category" type="text" value={formik.values.category} onChange={formik.handleChange}/>
              {formik.errors.category && formik.touched.category && (
                <div className="text-red-500">{formik.errors.category}</div>
              )}
            </div>

            <div>
              <InputGroup label="Description" name="description" type="text" value={formik.values.description} onChange={formik.handleChange}/>
              {formik.errors.description && formik.touched.description && (
                <div className="text-red-500">{formik.errors.description}</div>
              )}
            </div>

            <div>
              <InputGroup label="Image" name="image" type="text" value={formik.values.image} onChange={formik.handleChange}/>
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
