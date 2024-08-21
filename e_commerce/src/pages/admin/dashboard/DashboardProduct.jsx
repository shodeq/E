import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DashboardProduct() {

    // return (
    //     <div>
    //         DashboardProduct ini
    //     </div>
    // )
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:2207/products?key=aldypanteq');
                const result = await response.json();
                setProducts(result.data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);  // Stop loading after fetching is done
            }
        };
        fetchProducts();
    }, []);

    const renderElements = () => {
        if (products.length === 0 && !loading) {
            return <p className="text-center text-gray-500">No products found.</p>;
        }

        return products.map((product, index) => (
            <div key={index} className="flex justify-center">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                    <div className="flex flex-col gap-4">
                        <p className="text-lg font-semibold text-gray-800">{product.name}</p>
                        <p className="text-xl text-gray-600">${product.price}</p>
                        <Link 
                            to={`/product/detail/${product.id}`} 
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            DETAIL
                        </Link>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Product</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {loading ? (
                    <p className="text-center text-gray-500">Loading products...</p>
                ) : (
                    renderElements()
                )}
            </div>
        </div>
    );
}
