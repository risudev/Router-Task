import { useCart } from "../Context/CartContext";
import CartItem from "../Components/CartItem";

export default function Cart() {
    const { cart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = total * 0.1;
    const finalPrice = total - discount;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-extrabold mb-4 italic flex justify-center items-center text-red-800 ">
                Cart
                <span className="w-10 h-10 object-contain">
                    <img
                        src="https://cdn-icons-png.flaticon.com/256/2331/2331966.png"
                        alt="Cart"
                    />
                </span>
            </h1>
            {cart.length === 0 ? (
                <p className="text-2xl font-extrabold mb-4 italic flex justify-center items-center text-black">
                    Your cart is empty.
                    <span className="w-16 h-16 object-contain ">
                        <img
                            src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?semt=ais_hybrid&w=740"
                            alt="Empty Bag"
                        />
                    </span>
                </p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <div className="mt-4 text-right ">
                        <p className="font-bold">Total: ${total.toFixed(2)}</p>
                        <p className="font-bold text-green-600">
                            Discount (10%): -${discount.toFixed(2)}
                        </p>
                        <p className="font-bold text-red-600">
                            Final Price: ${finalPrice.toFixed(2)}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}