import { FaChartLine, FaDollarSign, FaShoppingBag, FaSmile } from 'react-icons/fa';

export default function Dashboard() {
    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-800 dark:text-white h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Revenue</h3>
                        <span className="text-gray-500 text-sm">This Week</span>
                    </div>
                    <div className="mt-4">
                        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FaChartLine className="text-blue-500" size={50} />
                        </div>
                        <div className="mt-4 text-3xl font-bold text-center">$2,900</div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold">Response Rate</h3>
                    <div className="mt-4">
                        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full border-8 border-blue-500 flex items-center justify-center text-2xl font-bold">
                                65%
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-center">
                            65% New Customers, 35% Old Customers
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold">Satisfaction Rate</h3>
                    <div className="mt-4">
                        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FaSmile className="text-red-500" size={50} />
                        </div>
                        <div className="mt-4 text-3xl font-bold text-center text-red-500">96.99%</div>
                        <div className="text-sm text-center text-gray-500">Based on Likes</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <FaShoppingBag className="text-blue-500" size={40} />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">Total Sale</h3>
                            <div className="text-2xl font-bold">$37,890.580</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <FaDollarSign className="text-blue-500" size={40} />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">Total Revenue</h3>
                            <div className="text-2xl font-bold">$12,890.570</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <FaChartLine className="text-blue-500" size={40} />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">Total Profit</h3>
                            <div className="text-2xl font-bold">$15,190.590</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
                <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 text-left text-gray-500 dark:text-gray-400">No</th>
                            <th className="py-2 text-left text-gray-500 dark:text-gray-400">Product Name</th>
                            <th className="py-2 text-left text-gray-500 dark:text-gray-400">Price</th>
                            <th className="py-2 text-left text-gray-500 dark:text-gray-400">Sale</th>
                            <th className="py-2 text-left text-gray-500 dark:text-gray-400">Product Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2">1</td>
                            <td className="py-2">iPhone 12 Pro</td>
                            <td className="py-2">$1200</td>
                            <td className="py-2">$32,456.50</td>
                            <td className="py-2">
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-lg">In Stock</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2">2</td>
                            <td className="py-2">Ray-Ban RB448N</td>
                            <td className="py-2">$155</td>
                            <td className="py-2">$1,459.65</td>
                            <td className="py-2">
                                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-lg">Out of Stock</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2">3</td>
                            <td className="py-2">Analog Black Dial Watch</td>
                            <td className="py-2">$275</td>
                            <td className="py-2">$3,959.15</td>
                            <td className="py-2">
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-lg">In Stock</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
