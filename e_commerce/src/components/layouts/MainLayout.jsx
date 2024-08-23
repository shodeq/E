import { Outlet } from "react-router-dom";
import Navbar from "../fragments/guest/Navbar";
export default function MainLayout() {
  return (
    <div className="font-poppins bg-gray-100 dark:bg-gray-800 pt-6">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
