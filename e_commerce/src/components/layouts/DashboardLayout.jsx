import { Outlet } from "react-router-dom";
import Navbar from "../fragments/dashboard/Navbar";

export default function DashboardLayout() {
    return (
        <div className="font-poppins">
            <Navbar/>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
