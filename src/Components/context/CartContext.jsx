import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

    // Favourites
     const [favourites, setFavourites] = useState(() => {
    const savedFav = localStorage.getItem("favouritesItems");
    return savedFav ? JSON.parse(savedFav) : [];
  });

    const addToFavourites = (item) => {
        setFavourites((prev) => {
            if(prev.some((i) => i.id === item.id)) return prev;
            return [...prev, item]
        })
    }

    useEffect(() => {
        localStorage.setItem("favouritesItems", JSON.stringify(favourites))
    }, [favourites])

    const removeFromFavourites = (id) => {
        setFavourites((prev) => prev.filter((i) => i.id !== id))
    }
    
    
    
    
    
    
    
    
    
    // Cart 

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // increaseQuantity

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // decreaseQuantity

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // removeFromCart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addToFavourites,
        favourites,
        removeFromFavourites
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
