import { Link } from "react-router-dom";
import logo2 from "../../../public/assets/images/Logo2.png";

export default function Login() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center font-poppins">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg dark:bg-gray-800 p-8">
                <div className="flex flex-col items-center">
                    <img className="w-20 h-20 mb-1" src={logo2} alt="logo" />
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Welcome Back!
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                        Please log in to access your account and <br /> continue shopping.
                    </p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <a href="#" className="flex justify-end text-sm font-medium text-primary-600 hover:underline dark:text-white">Forgot password?</a>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Login
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                        Don’t have an account yet? <Link to="/auth/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}
