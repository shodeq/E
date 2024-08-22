import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Home from "./pages/guest/Home";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import DashboardProduct from "./pages/admin/dashboard/DashboardProduct";
import DashboardProductCreate from "./pages/admin/dashboard/DashboardProductCreate";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";





const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard/>,
            },
            {
                path: "product",
                element: <DashboardProduct />,
            },
            {
                path: "create",
                element: <DashboardProductCreate />,
            },
            {
                path: "update",
                element: <DashboardProductCreate />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "register",
                element: <Register/>,
            },
        ],
    },
]);

export default router;