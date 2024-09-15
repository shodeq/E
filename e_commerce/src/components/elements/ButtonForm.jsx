/* eslint-disable react/prop-types */
export default function ButtonForm({ children, type, className, ...props }) {
    return <button type={type} className={`text-white inline-flex items-center bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-transparent hover:border hover:border-blue-600 hover:text-blue-600 hover:bg-transparent ${className}`} {...props}>{children}</button>
}