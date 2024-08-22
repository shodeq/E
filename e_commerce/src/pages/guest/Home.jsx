import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <div className="px-6 dark:bg-gray-800 dark:text-white ">
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
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-6xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-center mb-3">Available Products</h1>
          <p className="text-center mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ad, sequi. Libero reprehenderit ab dolorum ex.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="rounded-2xl overflow-hidden bg-transparent">
              <img
                src="https://via.placeholder.com/400"
                alt="Roadster"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="flex justify-between items-start bg-transparent py-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Roadster</h3>
                  <p className="text-sm text-gray-500">Black Solid Round Neck</p>
                  <div className="flex items-center gap-2 mt-[5px]">
                    <span className="text-2xl font-semibold text-blue-500">$80</span>
                    <span className="text-gray-500 text-sm line-through">$100</span>
                  </div>
                </div>
                <button className="bg-transparent p-3 rounded-full border-2 border-gray-300">
                  <HiOutlineShoppingBag className="text-2xl" />
                </button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-transparent">
              <img
                src="https://via.placeholder.com/400"
                alt="Blue Blazer"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="flex justify-between items-start bg-transparent py-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Blue Blazer</h3>
                  <p className="text-sm text-gray-500">Men’s clothes</p>
                  <div className="flex items-center gap-2 mt-[5px]">
                    <span className="text-2xl font-semibold text-blue-500">$120</span>
                    <span className="text-gray-500 text-sm line-through">$149</span>
                  </div>
                </div>
                <button className="bg-transparent p-3 rounded-full border-2 border-gray-300">
                  <HiOutlineShoppingBag className="text-2xl" />
                </button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-transparent">
              <img
                src="https://via.placeholder.com/400"
                alt="Black Shirt"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="flex justify-between items-start bg-transparent py-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Black Shirt</h3>
                  <p className="text-sm text-gray-500">Shirts</p>
                  <div className="flex items-center gap-2 mt-[5px]">
                    <span className="text-2xl font-semibold text-blue-500">$75</span>
                    <span className="text-gray-500 text-sm line-through">$100</span>
                  </div>
                </div>
                <button className="bg-transparent p-3 rounded-full border-2 border-gray-300">
                  <HiOutlineShoppingBag className="text-2xl" />
                </button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-transparent">
              <img
                src="https://via.placeholder.com/400"
                alt="Beige T-shirt"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="flex justify-between items-start bg-transparent py-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Beige T-shirt</h3>
                  <p className="text-sm text-gray-500">Women’s clothes</p>
                  <div className="flex items-center gap-2 mt-[5px]">
                    <span className="text-2xl font-semibold text-blue-500">$50</span>
                    <span className="text-gray-500 text-sm line-through">$75</span>
                  </div>
                </div>
                <button className="bg-transparent p-3 rounded-full border-2 border-gray-300">
                  <HiOutlineShoppingBag className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
