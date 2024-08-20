// import { useState } from "react";


export default function DashboardProductCreate() {

  return (
    <div>
      DashboardProductCreate
    </div>
  )
  //   const [product, setProduct] = useState({ name: "", description: "", category: "", image: "", price: 0})
  //   const [message, setMessage] = useState("")

  //   const handleChange = (e) => {
  //       const { name, value } = e.target;
  //       setProduct((prev) => ({
  //           ...prev,
  //           [name]: value,
  //       }))
  //   }

  //   const submitHandler = (e) => {
  //       e.preventDefault();
  //       createProductData(product)
  //   }

  //   const createProductData = async (data) => {
  //       try {
  //           const response = await fetch("http://localhost:2207/products?key=aldypanteq", {
  //               method: "POST",
  //               headers: {
  //                   "Content-Type": "application/json",
  //               },
  //               body: JSON.stringify({
  //                   ...data,
  //                   price: Number(data.price)
  //               })
  //           })
  //           if (!response.ok) {
  //               throw new Error(`HTTP error! status: ${response.status}`)
  //           }
  //           const result = await response.json()
  //           setMessage(result.message)
  //           setProduct({ name: "", description: "", category: "", image: "", price: 0 })
  //       }   catch (error) {
  //           setMessage('An error occurred while creating the product')
  //       }
  //   }

  // return (
  //   <div className="max-w-lg mx-auto p-6">
  //     <h1 className="text-2xl font-bold mb-6">Create New Product</h1>
  //     {message && <p className=" mb-6">{message}</p>}
  //     <form action="" onSubmit={submitHandler}>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="name"
  //           className="block text-sm font-medium text-gray-700">
  //           Name
  //         </label>
  //         <input
  //           type="text"
  //           id="name"
  //           name="name"
  //           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="price"
  //           className="block text-sm font-medium text-gray-700">
  //           Price
  //         </label>
  //         <input
  //           type="number"
  //           id="price"
  //           name="price"
  //           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="category"
  //           className="block text-sm font-medium text-gray-700">
  //           Category
  //         </label>
  //         <input
  //           type="text"
  //           id="category"
  //           name="category"
  //           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="description"
  //           className="block text-sm font-medium text-gray-700">
  //           Description
  //         </label>
  //         <input
  //           id="description"
  //           name="description"
  //           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
  //           onChange={handleChange} 
  //           />
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="image"
  //           className="block text-sm font-medium text-gray-700">
  //           Product Image
  //         </label>
  //         <input
  //           id="image"
  //           name="image"
  //           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <button
  //         type="submit"
  //         className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
  //         Create Product
  //       </button>
  //     </form>
  //   </div>
  // );
}