/* eslint-disable react/prop-types */
export default function Label({ children, htmlFor, className, ...props }) {
    return (
        <label htmlFor={htmlFor} className={`${className}block mb-2 text-sm font-medium text-gray-900 dark:text-white`} {...props}>
            {children}
        </label>
    );
}