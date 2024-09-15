import { useState } from "react";
import Pagination from "../../components/elements/Pagination";
import ProductCard from "../../components/elements/ProductCard";
import { useProducts } from "../../features/product/useProduct";
import Hero from "../../components/elements/Hero";

export default function Home() {
  const [limit] = useState(5);
  const [page, setPage] = useState(1);

  const { data: products, isLoading, error, totalPages } = useProducts(limit, page);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Hero/>
      {/* <div className="px-6 dark:text-white mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between h-full lg:col-span-2">
            <div>
              <h2 className="text-4xl font-bold">Mega Sale Up To 50% Off All Furniture</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                Transform your home with premium furniture at unbeatable prices. Don't miss out on our limited-time offer to elevate your space with elegance and comfort.
              </p>
            </div>
            <button className="mt-6 bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg text-lg hover:bg-blue-500">
              Shop Now
            </button>
          </div>
          <div className="flex flex-col justify-between space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Summer Furniture Collection</h3>
                <button className="mt-2 text-blue-700 dark:text-blue-400 text-lg hover:underline">
                  Discover Now
                </button>
              </div>
              <img
                src="https://via.placeholder.com/150"
                alt="Summer Furniture"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Exclusive 30% Off on Luxury Sofas</h3>
                <button className="mt-2 text-blue-700 dark:text-blue-400 text-lg hover:underline">
                  Shop Now
                </button>
              </div>
              <img
                src="https://via.placeholder.com/150"
                alt="Luxury Sofa"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="min-h-screen flex flex-col items-center dark:bg-gray-800 py-12">
        <div className="max-w-[87rem] mx-auto py-12">
          <h1 className="text-4xl font-bold text-center mb-3 text-gray-900 dark:text-gray-100">Available Products</h1>
          <p className="text-center mb-12 text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ad, sequi. Libero reprehenderit ab dolorum ex.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <h1 className="text-red-500 text-xl col-span-full text-center">No Product Available</h1>
            )}
          </div>
          <div className="mt-6">
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
}
