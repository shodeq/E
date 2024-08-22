import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:2207/products?key=aldypanteq');
        const result = await response.json();
        setProducts(result.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="px-6 dark:bg-gray-800 dark:text-white mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between h-full lg:col-span-2">
            <div>
              <h2 className="text-4xl font-bold">Mega Sale Up To 50% Off For All</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare vestibulum mollis. Nam vitae augue purus. Integer ac accumsan nunc.
              </p>
            </div>
            <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg hover:bg-blue-500">
              Shop Now
            </button>
          </div>
          <div className="flex flex-col justify-between space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Summer Travel Collection</h3>
                <button className="mt-2 text-blue-600 dark:text-blue-400 text-lg hover:underline">
                  Discover Now
                </button>
              </div>
              <img
                src="https://via.placeholder.com/150"
                alt="Summer Collection"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Get 30% Off On iPhone</h3>
                <button className="mt-2 text-blue-600 dark:text-blue-400 text-lg hover:underline">
                  Shop Now
                </button>
              </div>
              <img
                src="https://via.placeholder.com/150"
                alt="iPhone Discount"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center dark:bg-gray-900">
  <div className="max-w-6xl mx-auto py-12">
    <h1 className="text-4xl font-bold text-center mb-3 text-gray-900 dark:text-gray-100">Available Products</h1>
    <p className="text-center mb-12 text-gray-700 dark:text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ad, sequi. Libero reprehenderit ab dolorum ex.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
      {loading ? (
        <div className="col-span-full text-center text-gray-700 dark:text-gray-300">Loading...</div>
      ) : products.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 dark:text-gray-500">No products found.</div>
      ) : (
        products.map((product) => (
          <div key={product.id} className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800">
            <img
              src={product.imageUrl || "https://via.placeholder.com/400"} // Ensure product has an image URL
              alt={product.name}
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div className="flex justify-between items-start bg-white dark:bg-gray-800 py-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold text-gray-900 dark:text-gray-100">{product.name}</h3>
                <p className="text-[13px] text-gray-500 dark:text-gray-400">{product.category}</p>
                <div className="flex items-center gap-2 mt-[5px]">
                  <span className="text-sm font-semibold text-blue-500">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 dark:text-gray-400 text-sm line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
              <button className="bg-transparent p-3 rounded-full border-2 border-gray-300 dark:border-gray-700">
                <HiOutlineShoppingBag className="text-2xl text-gray-900 dark:text-gray-100" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</div>

    </>
  );
}
