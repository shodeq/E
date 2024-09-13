/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export default function Pagination({ page, totalPages, setPage }) {
    const { pathname } = useLocation();

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <nav className="flex justify-center items-center mt-8 space-x-4" aria-label="Pagination">
            <Link
                type="button"
                className={`min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg border ${page === 1 ? 'pointer-events-none opacity-50' : 'border-gray-200 text-gray-800 hover:bg-gray-100'} dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600`}
                aria-label="Previous"
                onClick={() => handlePageChange(page - 1)}
                to={`${pathname}?page=${page - 1}`}
                disabled={page === 1}
            >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"></path>
                </svg>
                <span className="sr-only">Previous</span>
            </Link>

            <span className="text-sm text-gray-800 dark:text-white">
                Page {page} of {totalPages}
            </span>

            <Link
                type="button"
                className={`min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg border ${page === totalPages ? 'pointer-events-none opacity-50' : 'border-gray-200 text-gray-800 hover:bg-gray-100'} dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600`}
                aria-label="Next"
                onClick={() => handlePageChange(page + 1)}
                to={`${pathname}?page=${page + 1}`}
                disabled={page === totalPages}
            >
                <span className="sr-only">Next</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"></path>
                </svg>
            </Link>
        </nav>
    );
}
