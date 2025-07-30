import { useCart } from '../Context/CartContext';

export default function CartItem({ item }) {
    const { dispatch } = useCart();

    return (
        <div className="flex justify-between items-center border p-2">
            <div>
                <h3 className="font-bold">{item.title}</h3>
                <img src={item.image} alt={item.title} className="w-18 h-18 object-contain" />

                <p className='text-xs font-bold border rounded-xl p-2 mt-2 w-40 text-pink-900'>${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="flex gap-2">
                <button onClick={() => dispatch({ type: 'DECREASE', payload: item.id })} className="px-2 bg-gray-300">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch({ type: 'INCREASE', payload: item.id })} className="px-2 bg-gray-300">+</button>
                <button onClick={() => dispatch({ type: 'REMOVE', payload: item.id })} className="px-2 bg-red-500 text-white">X</button>
            </div>
        </div>
    );
}