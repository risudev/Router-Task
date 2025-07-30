import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = [];

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const exists = state.find(item => item.id === action.payload.id);
            if (exists) return state;
            return [...state, { ...action.payload, quantity: 1 }];

        case 'REMOVE':
            return state.filter(item => item.id !== action.payload);

        case 'INCREASE':
            return state.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item);

        case 'DECREASE':
            return state.map(item => item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item);

        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);