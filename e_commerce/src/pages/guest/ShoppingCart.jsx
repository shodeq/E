import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { RiHome6Line } from "react-icons/ri";
import Swal from "sweetalert2";

export default function ShoppingCart() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:2207/products/${id}?key=aldypanteq`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product");
                }
                const data = await response.json();
                setProduct(data.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        Swal.fire({
            title: "Added to Cart",
            text: "This item has been added to your cart.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
        });
    };

    const handleBuyNow = () => {
        Swal.fire({
            title: "Purchase Confirmed",
            text: "Proceed to checkout.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/checkout");
            }
        });
    };

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="h-screen px-6">
            <section className="relative p-8 bg-white dark:bg-gray-900 border rounded-lg dark:border-neutral-700">
            <nav className="text-sm mb-6 text-gray-500">
                <button onClick={() => navigate("/")} className="flex items-center text-gray-400 hover:text-blue-700">
                    <RiHome6Line className="mr-1 text-lg" />
                    <Link href="/" >Home</Link>
                </button>
            </nav>
            <div className="flex flex-col lg:flex-row justify-between items-start">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <img
                        src={product?.image || "https://via.placeholder.com/150"}
                        alt="Product Front"
                        className="w-full h-[28rem] object-cover rounded-xl"
                    />
                </div>

                <div className="lg:w-1/2 lg:ml-8">
                    <div className="flex justify-between items-start mb-2">
                        <h1 className="text-2xl font-bold dark:text-neutral-200">{product?.name}</h1>
                        <button
                            onClick={() => Swal.fire({
                                title: "Added to Wishlist",
                                text: "This item has been added to your wishlist.",
                                icon: "success",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "OK",
                            })}
                            className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 focus:outline-none"
                        >
                            <CiHeart className="text-[22px]" />
                        </button>
                    </div>
                    <p className="text-blue-600 mb-4">{product?.category}</p>
                    <p className="text-sm text-gray-600 mb-6">{product?.description}</p>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-2xl font-semibold text-blue-600 mb-6">${product?.price}</p>

                    <div className="flex space-x-2 mb-6">
                        <div className="flex items-center border border-gray-400 rounded-full overflow-hidden">
                            <button
                                onClick={decreaseQuantity}
                                className="w-14 h-14 flex items-center justify-center text-gray-600 dark:text-neutral-200 dark:hover:text-black hover:bg-gray-100 text-xl"
                            >
                                -
                            </button>
                            <span className="w-20 h-14 flex items-center justify-center text-black dark:text-neutral-200 border-x border-gray-400">{quantity}</span>
                            <button
                                onClick={increaseQuantity}
                                className="w-14 h-14 flex items-center justify-center text-gray-600 dark:text-neutral-200 dark:hover:text-black hover:bg-gray-100 text-xl"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="flex space-x-4 mb-6">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 py-3 bg-blue-50 text-blue-600 rounded-[2.5rem] font-semibold hover:bg-blue-100"
                        >
                            Add To Cart
                        </button>
                        <button
                            onClick={handleBuyNow}
                            className="flex-1 py-3 bg-blue-600 text-white rounded-[2.5rem] font-semibold hover:bg-blue-700"
                        >
                            Buy Now
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">*Love it, buy it! All rental fees go towards your purchase.</p>
                </div>
            </div>
        </section>
        </div>
    );
}
