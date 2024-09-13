import { Link } from "react-router-dom";
import logo1 from "../../../../public/assets/images/Logo1.png";
import NavLink from "../../elements/NavLink";

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-xl rounded-xl p-4 mx-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
                <Link to="/" className="block">
                    <img
                        src={logo1}
                        alt="Float UI logo"
                        className="w-[13rem] transition-transform transform hover:scale-110"
                    />
                </Link>
                <div className="hidden md:flex space-x-8">
                    <ul className="flex items-center space-x-8">
                        <li className="text-gray-700 dark:text-gray-300">
                            <NavLink href={"/"}>Home</NavLink>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <NavLink href={"/dashboard"}> Dashboard</NavLink>
                            
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <NavLink href={"/dashboard/product"}>Product</NavLink>
                
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <NavLink href={"/dashboard/create"}>Create</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
