import { Outlet } from "react-router-dom";
import Navbar from "../fragments/dashboard/Navbar";

export default function DashboardLayout() {
    return (
        <div className="font-poppins  dark:bg-gray-900 pt-6">
            <Navbar/>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
