import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return (
    <Link key={product.id} to={`/shopping-cart/${product.id}`} className="rounded-2xl overflow-hidden dark:bg-gray-800">
      <img
        src={product.imageUrl || "https://via.placeholder.com/400"}
        alt={product.name}
        className="w-full h-80 object-cover rounded-2xl"
      />
      <div className="flex justify-between items-start py-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-semibold text-gray-900 dark:text-gray-100">{product.name}</h3>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">{product.category}</p>
          <div className="flex items-center gap-2 mt-[5px]">
            <span className="text-sm font-semibold text-blue-700">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 dark:text-gray-400 text-sm line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
        <button className="bg-transparent p-3 rounded-full border-2 border-gray-300 hover:border-gray-200 dark:border-gray-700 hover:bg-gray-200">
          <HiOutlineShoppingBag className="text-xl text-gray-900 dark:text-gray-100" />
        </button>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    imageUrl: PropTypes.string,
  }).isRequired,
};
