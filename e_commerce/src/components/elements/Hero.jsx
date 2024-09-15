export default function Hero() {
    return(
        <div className="px-6 dark:text-white mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between h-full lg:col-span-2">
            <div>
              <h2 className="text-4xl font-bold">Mega Sale Up To 50% Off All Furniture</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                Transform your home with premium furniture at unbeatable prices. Dont miss out on our limited-time offer to elevate your space with elegance and comfort.
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
    )
}