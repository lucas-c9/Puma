import React, { createContext, useContext, useState } from 'react';
const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); //Array de productos global

    const addToCart = (product) => {
        //nos fijamos si ya no existe el item en el carrito
        const existingCartItem = cart.find((cartItem) => cartItem.product._id === product._id);
        
        // Item esta en el carrito; 
        if (existingCartItem) {
            if (existingCartItem.quantity < product.stock) {
                const updatedCart = cart.map((cartItem) => {
                    if (cartItem.product._id === product._id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 }; //inmutables
                    }
                    return cartItem;
                });
                setCart(updatedCart);
            }
        } else {
            // Item no esta en el carrito;  
            if (product.stock > 0) {
                setCart([...cart, { product, quantity: 1 }]);
            }
        }
    }

    const removeFromCart = (item) => {
        //logica para remover un item del carrito
        const updatedCart = cart.filter((cartItem) => cartItem.product._id !== item.product._id);
        setCart(updatedCart)
    }

    const resetCart = (item) => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, resetCart }}>
            {children}
        </CartContext.Provider>
    );
}
