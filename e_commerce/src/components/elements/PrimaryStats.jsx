import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

export default function PrimaryStats(){

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


    return(
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
    )
}