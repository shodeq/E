/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function NavLink({children, href}) {
    return <Link to={href}>
        {children}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
  }