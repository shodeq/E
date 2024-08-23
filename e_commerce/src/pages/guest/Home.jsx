import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="px-6 dark:text-white mb-8">
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
      </div>
      <div className="min-h-screen flex justify-center items-center dark:bg-gray-800">
        <div className="max-w-[87rem] mx-auto py-12">
          <h1 className="text-4xl font-bold text-center mb-3 text-gray-900 dark:text-gray-100">Available Products</h1>
          <p className="text-center mb-12 text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ad, sequi. Libero reprehenderit ab dolorum ex.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
            {loading ? (
              <div className="col-span-full text-center text-gray-700 dark:text-gray-300">Loading...</div>
            ) : currentProducts.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 dark:text-gray-500">No products found.</div>
            ) : (
              currentProducts.map((product) => (
                <Link key={product.id} to={`/shopping-cart/${product.id}`} className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800">
                  <img
                    src={product.imageUrl || "https://via.placeholder.com/400"}
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="flex justify-between items-start py-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[16px] font-semibold text-gray-900 dark:text-gray-100">{product.name}</h3>
                      <p className="text-[13px] text-gray-500 dark:text-gray-400">{product.category}</p>
                      <div className="flex items-center gap-2 mt-[5px]">
                        <span className="text-sm font-semibold text-blue-700">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-500 dark:text-gray-400 text-sm line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <button className="bg-transparent p-3 rounded-full border-2 border-gray-300 dark:border-gray-700">
                      <HiOutlineShoppingBag className="text-xl text-gray-900 dark:text-gray-100" />
                    </button>
                  </div>
                </Link>
              ))
            )}
          </div>
          <nav className="flex justify-center items-center mt-8 -space-x-px" aria-label="Pagination">
            <button
              type="button"
              className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              aria-label="Previous"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span className="sr-only">Previous</span>
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                type="button"
                className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${currentPage === index + 1 ? 'bg-gray-200 text-gray-800' : 'border border-gray-200 text-gray-800 hover:bg-gray-100'} py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:border-neutral-700 dark:text-white dark:focus:bg-neutral-500`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              type="button"
              className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              aria-label="Next"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
