import { Outlet } from "react-router-dom";
import Navbar from "../fragments/guest/Navbar";
export default function MainLayout() {
  return (
    <div className="font-poppins  dark:bg-gray-900 pt-6">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
