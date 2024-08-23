import { Link } from "react-router-dom";
import logo2 from "../../../public/assets/images/Logo2.png";

export default function Register() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center font-poppins">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg dark:bg-gray-800 p-8">
        <div className="flex flex-col items-center mb-3">
          <img className="w-20 h-20 mb-1" src={logo2} alt="logo" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Create Your New Account
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
            Join us to unlock exclusive features and start your shopping journey with ease.
          </p>
        </div>
        <form className="space-y-4">
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
          <div>
            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat Password</label>
            <input
              type="password"
              id="repeat-password"
              name="repeat-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              I agree with the <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Register
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
            Already have an account? <Link to="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
