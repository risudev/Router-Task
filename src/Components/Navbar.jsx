import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { IoIosCart } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
export default function Navbar() {
    const { cart } = useCart();

    return (
        <nav className="bg-gray-900 p-4 text-white shadow-md flex justify-between items-center">
            {/* Brand Logo */}
            <Link
                to="#"
                className="text-2xl font-extrabold italic flex items-center gap-2 hover:scale-105 transition"
            >
                TrendyMart <FaBagShopping size={28} />
            </Link>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
                <Link to="/">
                    <button className="bg-red-500 text-white px-4 py-2 flex items-center gap-2 rounded hover:bg-red-600 transition">
                        <IoHomeOutline size={22} />
                        Home
                    </button>
                </Link>

                <Link to="/cart">
                    <button className="bg-red-500 text-white px-4 py-2 flex items-center gap-2 rounded hover:bg-red-600 transition">
                        <IoIosCart size={22} />
                        Cart ({cart.length})
                    </button>
                </Link>
            </div>
        </nav>
    );
}