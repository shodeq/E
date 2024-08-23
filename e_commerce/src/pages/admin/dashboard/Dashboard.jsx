import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

export default function Dashboard() {
    const salesData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Sales",
                data: [3000, 5000, 4000, 6000],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
            },
        ],
    };

    const revenueData = {
        labels: ["Electronics", "Clothing", "Home", "Books", "Toys"],
        datasets: [
            {
                label: "Revenue Distribution",
                data: [40, 20, 15, 15, 10],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#F57C00"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#F57C00"],
            },
        ],
    };

    const orderStatusData = {
        labels: ["Pending", "Processing", "Shipped", "Delivered"],
        datasets: [
            {
                label: "Order Status",
                data: [25, 40, 20, 15],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
                borderColor: "rgba(0,0,0,0.1)",
                borderWidth: 1,
            },
        ],
    };

    const usersData = [
        { id: 1, name: "John Doe", email: "john@example.com", registrationDate: "2024-07-15", status: "Active", totalPurchases: "$3,500" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", registrationDate: "2024-08-01", status: "Inactive", totalPurchases: "$1,200" },
        { id: 3, name: "Michael Johnson", email: "michael@example.com", registrationDate: "2024-06-22", status: "Active", totalPurchases: "$4,800" },
        // Add more users as needed
    ];

    return (
        <div className="p-6 bg-gray-transparent dark:bg-gray-800 dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Sales Overview</h3>
                        <span className="text-gray-500 text-sm">This Month</span>
                    </div>
                    <div className="mt-4 h-48">
                        <Line data={salesData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold">Revenue Distribution</h3>
                    <div className="mt-4 h-48">
                        <Doughnut data={revenueData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold">Order Status</h3>
                    <div className="mt-4 h-48">
                        <Bar data={orderStatusData} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top',
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                                        },
                                    },
                                },
                            },
                            scales: {
                                x: {
                                    stacked: true,
                                },
                                y: {
                                    stacked: true,
                                },
                            },
                        }} />
                    </div>
                </div>
            </div>
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
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">User List</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                        <thead className="bg-gray-50 dark:bg-neutral-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Registration Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-200">Total Purchases</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                            {usersData.map(user => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{user.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.registrationDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 py-1 rounded-lg ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.totalPurchases}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
