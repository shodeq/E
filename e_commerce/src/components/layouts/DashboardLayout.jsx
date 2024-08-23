import { Outlet } from "react-router-dom";
import Navbar from "../fragments/dashboard/Navbar";

export default function DashboardLayout() {
    return (
        <div className="font-poppins bg-gray-100 dark:bg-gray-800 pt-6">
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
