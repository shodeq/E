export default function TopProductTable() {
    return(
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
                <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                        <thead className="bg-gray-50 dark:bg-neutral-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">No</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Product Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Price</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Sale</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Product Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">1</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">iPhone 12 Pro</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$1200</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$32,456.50</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-lg">In Stock</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">2</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Ray-Ban RB448N</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$155</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$1,459.65</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-lg">Out of Stock</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">3</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Analog Black Dial Watch</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$275</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$3,959.15</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-lg">In Stock</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}