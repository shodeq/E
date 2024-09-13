import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useProductId } from "../../../features/product/useProductId";
import { useUpdateProduct } from "../../../features/product/useUpdateProduct";
import InputGroup from "../../../components/fragments/dashboard/InputGroup";

export default function DashboardProductUpdate() {
    const { id } = useParams();
    const { data: product } = useProductId(id);
    const { updateProduct, message } = useUpdateProduct();
    const navigate = useNavigate();

    const updateProductSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Minimal 3 Karakter")
            .max(16, "Maksimal 16 Karakter")
            .required("Required"),
        price: Yup.string()
            .min(0, "Price must be greater than or equal to 0")
            .required("Required"),
        category: Yup.string()
            .optional(),
        description: Yup.string()
            .min(3, "Minimal 3 Karakter")
            .max(35, "Maksimal 35 Karakter")
            .required("Required"),
        image: Yup.string()
            .url("Invalid URL")
            .required("Required"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            category: "",
            description: "",
            image: "",
        },
        validationSchema: updateProductSchema,
        onSubmit: (values) => {
            updateProduct(values, id); 
            navigate("/dashboard/product");  
        },
    });

    useEffect(() => {
        if (product) {
            formik.setValues({
                name: product.name,
                price: product.price,
                category: product.category,
                description: product.description,
                image: product.image,
            });
        }
    }, [id, product]);

    return (
        <div className="p-6">
            <div className="relative p-4 bg-white shadow dark:bg-gray-900 sm:p-5 border rounded-lg dark:border-neutral-700">
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 className="text-[1.2rem] font-semibold text-gray-900 dark:text-white">
                        Update Product
                    </h3>
                </div>
                {message && <p className="mb-6">{message}</p>}
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col gap-4 mb-4">
                        <div>
                            <InputGroup label="Name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div>
                            <InputGroup label="Price" name="price" type="number" value={formik.values.price} onChange={formik.handleChange}/>
                            {formik.touched.price && formik.errors.price ? ( 
                                <div className="text-red-500">{formik.errors.price}</div>
                            ) : null}
                        </div>
                        <div>
                            <InputGroup label="Category" name="category" type="text" value={formik.values.category} onChange={formik.handleChange}/>
                        </div>
                        <div>
                            <InputGroup label="Description" name="description" type="text" value={formik.values.description} onChange={formik.handleChange}/>
                            {formik.touched.description && formik.errors.description ? (
                                <div className="text-red-500">{formik.errors.description}</div>
                            ) : null}
                        </div>
                        <div>
                            <InputGroup label="Image" name="image" type="text" value={formik.values.image} onChange={formik.handleChange}/>
                            {formik.touched.image && formik.errors.image ? (
                                <div className="text-red-500">{formik.errors.image}</div>
                            ) : null}
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
