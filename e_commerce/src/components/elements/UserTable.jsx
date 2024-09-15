export default function UserTable() {
    
    const usersData = [
        { id: 1, name: "John Doe", email: "john@example.com", registrationDate: "2024-07-15", status: "Active", totalPurchases: "$3,500" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", registrationDate: "2024-08-01", status: "Inactive", totalPurchases: "$1,200" },
        { id: 3, name: "Michael Johnson", email: "michael@example.com", registrationDate: "2024-06-22", status: "Active", totalPurchases: "$4,800" },
    ];

    return(
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
    )
}