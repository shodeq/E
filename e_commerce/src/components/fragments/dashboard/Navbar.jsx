import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-xl rounded-xl p-4 mx-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
                <Link to="/" className="block">
                    <img
                        src="https://www.floatui.com/logo.svg"
                        width={120}
                        height={50}
                        alt="Float UI logo"
                        className="transition-transform transform hover:scale-110"
                    />
                </Link>
                <div className="hidden md:flex space-x-8">
                    <ul className="flex items-center space-x-8">
                        <li className="text-gray-700 dark:text-gray-300">
                            <Link to="/" className="relative group">
                                Home
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </Link>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <Link to="/dashboard" className="relative group">
                                Dashboard
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </Link>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <Link to="/dashboard/product" className="relative group">
                                Product
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </Link>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <Link to="/dashboard/create" className="relative group">
                                Create
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
