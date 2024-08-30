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
        <nav className="flex justify-center items-center mt-8 -space-x-px" aria-label="Pagination">
            <Link
              type="button"
              className={`${page === 1 ? 'pointer-events-none opacity-50' : ''} min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10`}
              aria-label="Previous"
              onClick={() => handlePageChange(page - 1)}
              to={`${pathname}?page=${page - 1}`}
              disabled={page === 1}
            >
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span className="sr-only">Previous</span>
            </Link>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                type="button"
                className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${page === index + 1 ? 'bg-gray-200 text-gray-800' : 'border border-gray-200 text-gray-800 hover:bg-gray-100'} py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-transparent dark:border-neutral-700 dark:text-white dark:focus:bg-neutral-500 dark:hover:bg-neutral-500`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <Link
              type="button"
              className={`${page === totalPages ? 'pointer-events-none opacity-50' : ''} min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10`}
              aria-label="Next"
              onClick={() => handlePageChange(page + 1)}
              to={`${pathname}?page=${page + 1}`}
              disabled={page === totalPages}
            >
              <span className="sr-only">Next</span>
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </nav>
    );
};
