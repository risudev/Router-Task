import { useCart } from "../Context/CartContext";

export default function ProductCard({ product }) {
    const { cart, dispatch } = useCart();
    const inCart = cart.find((item) => item.id === product.id);

    const handleAdd = () => dispatch({ type: "ADD", payload: product });
    const handleRemove = () => dispatch({ type: "REMOVE", payload: product.id });

    return (
        <div className=" p-4 rounded shadow-blue-200 shadow-xl border hover:scale-102 transition ">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto"
            />
            <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
            <p className="text-sm " >{product.description.substring(0, 80)}...</p>

            <p className="font-bold text-emerald-600 mt-2">Price: ${product.price}</p>
            <button
                onClick={inCart ? handleRemove : handleAdd}
                className={`mt-2 px-4 py-2 rounded text-white cursor-pointer ${inCart ? "bg-red-500 hover:scale-95" : "bg-gray-900 hover:scale-95"
                    } `}
            >
                {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
}